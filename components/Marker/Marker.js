import * as React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import className from "classnames/bind";
import styles from "./Marker.module.scss";
import BasketballCourt from "../../public/img/basketballCourt.png";
import TennisCourt from "../../public/img/tennisCourt.png";
import ChildCourt from "../../public/img/childCourt.png";
import FootballCourt from "../../public/img/footballCourt.png";
import HandballCourt from "../../public/img/handballCourt.png";
import VolleyballCourt from "../../public/img/volleyballCourt.png";
import GymnasticCourt from "../../public/img/gymnasticCourt.png";
import MultiSelectCourt from "../../public/svg/multiSelectCourt.svg";
import WithoutTypeCourt from "../../public/img/withoutTypeCourt.png";
import DefaultMarker from "../../public/svg/marker.svg";

const cx = className.bind(styles);

const Marker = ({ typeOfCourt, district, isCourtMarker }) => (
  <>
    {isCourtMarker ? (
      <button className={styles.btnMarker}>
        <svg
          width="40"
          height="51"
          viewBox="0 0 44 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.86479 7.87525C11.6142 4.11918 16.6976 2.00627 22 2C27.3024 2.00627 32.3858 4.11918 36.1352 7.87525C39.8846 11.6313 41.9937 16.7238 42 22.0357C42.0062 26.3746 40.5914 30.5957 37.9727 34.0517L37.9709 34.0571C37.9709 34.0571 37.4236 34.7748 37.3436 34.8713L22 53L6.66365 34.8804C6.57456 34.7766 6.02911 34.0571 6.02911 34.0571C3.40908 30.5997 1.99367 26.3766 2.00002 22.0357C2.00628 16.7238 4.11542 11.6313 7.86479 7.87525Z"
            fill="white"
          />
          <path
            className={cx({
              red: district === "Halytskyi",
              lilac: district === "Zaliznychnyi",
              orange: district === "Lychakivskyi",
              yellow: district === "Sykhivskyi",
              blue: district === "Frankivskyi",
              green: district === "Shevchenkivskyi",
              black: district === "Another",
            })}
            d="M22 2L22.0018 0.499997L21.9982 0.500001L22 2ZM7.86479 7.87525L6.80318 6.81553L7.86479 7.87525ZM36.1352 7.87525L37.1968 6.81553L36.1352 7.87525ZM42 22.0357L40.5 22.0375V22.0379L42 22.0357ZM37.9727 34.0517L36.7772 33.1458L36.6274 33.3434L36.5492 33.5788L37.9727 34.0517ZM37.9709 34.0571L39.1636 34.9667L39.3155 34.7676L39.3944 34.53L37.9709 34.0571ZM37.3436 34.8713L38.4886 35.8404L38.4936 35.8344L38.4986 35.8284L37.3436 34.8713ZM22 53L20.8551 53.9691L22 55.3218L23.145 53.9691L22 53ZM6.66365 34.8804L7.80862 33.9113L7.80199 33.9036L6.66365 34.8804ZM6.02911 34.0571L4.83359 34.9631L4.83379 34.9634L6.02911 34.0571ZM2.00002 22.0357L3.50002 22.0379L3.50002 22.0375L2.00002 22.0357ZM21.9982 0.500001C16.2977 0.506738 10.8332 2.7783 6.80318 6.81553L8.92639 8.93496C12.3951 5.46006 17.0974 3.5058 22.0018 3.5L21.9982 0.500001ZM37.1968 6.81553C33.1668 2.7783 27.7023 0.506738 22.0018 0.500001L21.9982 3.5C26.9026 3.5058 31.6049 5.46006 35.0736 8.93496L37.1968 6.81553ZM43.5 22.0339C43.4933 16.3257 41.2268 10.8527 37.1968 6.81553L35.0736 8.93496C38.5424 12.41 40.4942 17.122 40.5 22.0375L43.5 22.0339ZM39.1683 34.9576C41.9851 31.2402 43.5067 26.7 43.5 22.0336L40.5 22.0379C40.5057 26.0491 39.1978 29.9513 36.7772 33.1458L39.1683 34.9576ZM39.3944 34.53L39.3962 34.5245L36.5492 33.5788L36.5474 33.5843L39.3944 34.53ZM38.4986 35.8284C38.5621 35.7518 38.7438 35.5152 38.8776 35.3408C38.9517 35.2441 39.0232 35.1507 39.076 35.0815C39.1025 35.0468 39.1244 35.0182 39.1396 34.9982C39.1472 34.9882 39.1532 34.9804 39.1573 34.975C39.1594 34.9724 39.1609 34.9703 39.162 34.9689C39.1625 34.9682 39.1629 34.9677 39.1632 34.9673C39.1633 34.9671 39.1634 34.967 39.1635 34.9669C39.1636 34.9668 39.1636 34.9668 39.1636 34.9668C39.1636 34.9668 39.1636 34.9668 39.1636 34.9667C39.1636 34.9667 39.1636 34.9667 37.9709 34.0571C36.7781 33.1476 36.7781 33.1476 36.7781 33.1476C36.7781 33.1476 36.7781 33.1476 36.7781 33.1476C36.7781 33.1476 36.7781 33.1476 36.7781 33.1477C36.778 33.1477 36.7779 33.1479 36.7778 33.148C36.7775 33.1483 36.7772 33.1488 36.7767 33.1495C36.7756 33.1508 36.7741 33.1528 36.7722 33.1554C36.7682 33.1606 36.7623 33.1683 36.7548 33.1781C36.7398 33.1977 36.7183 33.2259 36.6922 33.2601C36.64 33.3285 36.5696 33.4205 36.4969 33.5153C36.424 33.6104 36.3496 33.7072 36.289 33.7855C36.2586 33.8248 36.2328 33.858 36.2129 33.8833C36.1893 33.9135 36.1839 33.92 36.1887 33.9142L38.4986 35.8284ZM23.145 53.9691L38.4886 35.8404L36.1987 33.9023L20.855 52.0309L23.145 53.9691ZM5.51871 35.8495L20.8551 53.9691L23.1449 52.0309L7.8086 33.9114L5.51871 35.8495ZM6.02911 34.0571C4.83379 34.9634 4.8338 34.9634 4.83381 34.9634C4.83381 34.9634 4.83382 34.9634 4.83384 34.9634C4.83386 34.9634 4.83389 34.9635 4.83393 34.9635C4.834 34.9636 4.83411 34.9638 4.83426 34.964C4.83454 34.9643 4.83496 34.9649 4.8355 34.9656C4.83658 34.967 4.83816 34.9691 4.84022 34.9718C4.84433 34.9772 4.85034 34.9852 4.85799 34.9953C4.8733 35.0154 4.89521 35.0443 4.92176 35.0792C4.97481 35.1489 5.04667 35.2433 5.12153 35.3412C5.25068 35.51 5.44526 35.764 5.52532 35.8573L7.80199 33.9036C7.80931 33.9121 7.78433 33.8817 7.71201 33.7884C7.65148 33.7104 7.57737 33.6139 7.50441 33.5186C7.43178 33.4236 7.3617 33.3316 7.30969 33.2632C7.28371 33.229 7.26232 33.2009 7.24745 33.1813C7.24001 33.1715 7.23421 33.1638 7.23029 33.1587C7.22833 33.1561 7.22684 33.1541 7.22586 33.1528C7.22536 33.1522 7.22499 33.1517 7.22475 33.1514C7.22463 33.1512 7.22454 33.1511 7.22449 33.151C7.22446 33.151 7.22444 33.151 7.22443 33.1509C7.22442 33.1509 7.22442 33.1509 7.22442 33.1509C7.22442 33.1509 7.22442 33.1509 6.02911 34.0571ZM0.500023 22.0335C0.493193 26.702 2.01541 31.2441 4.83359 34.9631L7.22462 33.1512C4.80274 29.9552 3.49415 26.0512 3.50002 22.0379L0.500023 22.0335ZM6.80318 6.81553C2.77324 10.8527 0.506745 16.3257 0.500022 22.0339L3.50002 22.0375C3.50581 17.122 5.4576 12.41 8.92639 8.93496L6.80318 6.81553Z"
            fill="red"
          />
        </svg>

        {typeOfCourt === "BasketballCourt" && (
          <div className={styles.icon}>
            <Image src={BasketballCourt} alt={typeOfCourt} />
          </div>
        )}
        {typeOfCourt === "TennisCourt" && (
          <div className={styles.icon}>
            <Image src={TennisCourt} alt={typeOfCourt} />
          </div>
        )}
        {typeOfCourt === "ChildCourt" && (
          <div className={styles.icon}>
            <Image src={ChildCourt} alt={typeOfCourt} />
          </div>
        )}
        {typeOfCourt === "FootballCourt" && (
          <div className={styles.icon}>
            <Image src={FootballCourt} alt={typeOfCourt} />
          </div>
        )}
        {typeOfCourt === "HandballCourt" && (
          <div className={styles.icon}>
            <Image src={HandballCourt} alt={typeOfCourt} />
          </div>
        )}
        {typeOfCourt === "VolleyballCourt" && (
          <div className={styles.icon}>
            <Image src={VolleyballCourt} alt={typeOfCourt} />
          </div>
        )}
        {typeOfCourt === "GymnasticCourt" && (
          <div className={styles.icon}>
            <Image src={GymnasticCourt} alt={typeOfCourt} />
          </div>
        )}

        {typeOfCourt === "WithoutTypeCourt" && (
          <div className={styles.icon}>
            <Image src={WithoutTypeCourt} alt={typeOfCourt} />
          </div>
        )}
        {typeOfCourt === "MultiSelectCourt" && (
          <MultiSelectCourt className={styles.icon} />
        )}
      </button>
    ) : (
      <button className={styles.btnMarker}>
        <DefaultMarker />
      </button>
    )}
  </>
);

Marker.defaultProps = {
  typeOfCourt: "FootballCourt",
  district: "Shevchenkivskyi",
  isCourtMarker: true,
};

Marker.propTypes = {
  typeOfCourt: PropTypes.oneOf([
    "GymnasticCourt",
    "VolleyballCourt",
    "ChildCourt",
    "BasketballCourt",
    "TennisCourt",
    "FootballCourt",
    "HandballCourt",
    "MultiSelectCourt",
    "WithoutTypeCourt",
  ]).isRequired,
  district: PropTypes.oneOf([
    "Halytskyi",
    "Zaliznychnyi",
    "Lychakivskyi",
    "Sykhivskyi",
    "Frankivskyi",
    "Shevchenkivskyi",
    "Another",
  ]).isRequired,
  isCourtMarker: PropTypes.oneOf([true, false]).isRequired,
};

export default Marker;
