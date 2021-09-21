import Link from "next/link";
import { useMemo } from "react";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import Logo from "../../public/svg/logo.svg";
import LogoMobile from "../../public/svg/logoMobile.svg";
import FacebookIcon from "../../public/svg/facebook.svg";
import InstaIcon from "../../public/svg/insta.svg";
import useWindowSize from "../../utils/customHooks/findWindowSize";
import setHeightOfHeader from "../../utils/findHeightOfHeader";

const cx = classNames.bind(styles);

const courtsLink = [
  { link: "/", name: "Волейбольний" },
  { link: "/", name: "Дитячий" },
  { link: "/", name: "Футбольний" },
  { link: "/", name: "Гімнастичний" },
  { link: "/", name: "Баскетбольний" },
  { link: "/", name: "Тенісний" },
  { link: "/", name: "Гандбольний" },
];

const socialLinks = [
  {
    className: cx("footerSocialsItemLink", "facebook"),
    link: "https://www.facebook.com/lkpsportresurs/",
    icon: FacebookIcon,
  },
  {
    className: cx("footerSocialsItemLink", "insta"),
    link: "https://www.instagram.com/sport_resurs/?hl=en",
    icon: InstaIcon,
  },
];

export default function Footer() {
  const size = useWindowSize();

  const heightOfHeader = useMemo(() => setHeightOfHeader(size.width), [size]);

  configureAnchors({ offset: heightOfHeader, scrollDuration: 400 });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoDesktop}>
            <Link passHref={true} href={"/"}>
              <a className={styles.logoLink}>
                <Logo />
              </a>
            </Link>
          </div>

          <div className={styles.logoMobile}>
            <Link href={"/"}>
              <a className={styles.logoLink}>
                <LogoMobile />
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.footerSocials}>
          <p className={styles.footerSocialsText}>Наші соціальні мережі:</p>
          <ul className={styles.footerSocialsList}>
            {socialLinks.map(({ link, className, icon: Icon }) => (
              <li key={link} className={styles.footerSocialsItem}>
                <a
                  className={className}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {<Icon className={styles.socialIcon} />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.flexWrapper}>
          <div className={styles.footerCourts}>
            <h3 className={styles.footerCourtsTitle}>Майданчики</h3>

            <ul className={styles.footerCourtsList}>
              {courtsLink.map((item) => (
                <li key={item.name} className={styles.footerCourtsLink}>
                  <Link href={item.link}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ScrollableAnchor id={"navigateToContacts"}>
            <div className={styles.footerContacts}>
              <h3 className={styles.footerContactsTitle}>Контакти</h3>
              <address className={styles.footerContactsAddress}>
                <p>79008, Львів,</p>
                <p>пл. Ринок, 1, каб. 516</p>
                <a href="tel:+38012345678" className={styles.footerTelephone}>
                  +38012345678
                </a>
              </address>
            </div>
          </ScrollableAnchor>
        </div>

        <div className={styles.legal}>
          <p>
            @2021. Усі права захищені. Сайт розроблено
            <a href="https://keenethics.com/" target="_blank" rel="noreferrer">
              KeenEthics
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
