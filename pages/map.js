import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import throttle from "lodash.throttle";
import classNames from "classnames";
import Map from "../components/Map";
import PlaygroundsSlider from "../components/PlaygroundsSlider";
import PlaygroundsList from "../components/PlaygroundsList";
import Filters from "../components/Filters";
import styles from "../styles/MapPage.module.scss";
import PlaygroundImage from "../public/svg/mapBackground.svg";
import HideMark from "../public/svg/hideSliderArrow.svg";
import { Context } from "../context";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // !! should be replaced to Sportresource key
const DEFAULT_CENTER = { lat: 49.841328, lng: 24.031592 };
const DEFAULT_ZOOM = 15;

export default function MapPage({ playgrounds }) {
  const { coordinates, handleCoordinates } = useContext(Context);

  const [searchPinCoords, setSearchPinCoords] = useState(coordinates);
  const [childClicked, setChildClicked] = useState(null);
  const [markerIndex, setMarkerIndex] = useState(0);
  const [sliderOpen, setSliderOpen] = useState(true);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(
    () => () => {
      handleCoordinates(null);
    },
    []
  );

  const mapRef = useRef();
  const filterPlaces = useCallback(() => {
    if (!mapRef.current) {
      return;
    }

    const bounds = mapRef.current.getBounds();
    setFilteredPlaces(
      playgrounds.filter((place) =>
        bounds.contains({
          lat: Number(place.latitude),
          lng: Number(place.longitude),
        })
      )
    );
  }, [playgrounds]);

  const filterPlacesThrottled = useRef(throttle(filterPlaces, 500));

  const onMapLoaded = useCallback(
    (map) => {
      mapRef.current = map;
      filterPlaces();
    },
    [filterPlaces]
  );

  const onMapChanged = useCallback(() => {
    filterPlacesThrottled.current();
  }, []);

  const handleSliderShow = () => {
    setSliderOpen((prevState) => !prevState);
  };
  const sidebarWrapperClass = classNames(styles.mobileSidebarWrapper, {
    [styles.hideMobileSidebar]: !sliderOpen,
  });
  const sliderWrapperClass = classNames(styles.sliderWrapper, {
    [styles.hideMobileSlider]: !sliderOpen,
  });
  const iconWrapperClass = classNames(styles.hideIcon, {
    [styles.openMobileIcon]: !sliderOpen,
  });

  return (
    <>
      <div className={styles.imageWrapper}>{<PlaygroundImage />}</div>
      <div className={styles.wrapper}>
        <div className={styles.sidebarWrapper}>
          <div className={styles.filterWrapper}>
            <Filters
              location="mapPage"
              API_KEY={API_KEY}
              handleCoordinates={setSearchPinCoords}
            />
          </div>
          <div className={sidebarWrapperClass}>
            <div className={styles.sidebarContainer}>
              <div className={styles.mobileHeaderWrapper}>
                <h1 className={styles.wrapperHeading}>Майданчики поблизу</h1>
                <div
                  role="button"
                  tabIndex={0}
                  className={iconWrapperClass}
                  onClick={handleSliderShow}
                >
                  <HideMark />
                </div>
              </div>
              <div className={sliderWrapperClass}>
                <PlaygroundsSlider
                  setChildClicked={setChildClicked}
                  markerIndex={markerIndex}
                  playgrounds={
                    filteredPlaces.length ? filteredPlaces : playgrounds
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles.scrollBox}>
            <div className={styles.listWrapper}>
              <PlaygroundsList
                playgrounds={
                  filteredPlaces.length > 0 ? filteredPlaces : playgrounds
                }
                childClicked={childClicked}
                setChildClicked={setChildClicked}
              />
            </div>
          </div>
        </div>
        <div className={styles.mapWrapper}>
          <Map
            apiKey={API_KEY}
            defaultZoom={DEFAULT_ZOOM}
            defaultCenter={DEFAULT_CENTER}
            places={filteredPlaces.length > 0 ? filteredPlaces : playgrounds}
            childClicked={childClicked}
            setChildClicked={setChildClicked}
            onLoad={onMapLoaded}
            onChange={onMapChanged}
            searchPinCoords={searchPinCoords}
            setMarkerIndex={setMarkerIndex}
            setSliderOpen={setSliderOpen}
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(process.env.HOST_playgrounds);
  const data = await res.json();
  return {
    props: {
      playgrounds: data.areas,
    },
  };
}
