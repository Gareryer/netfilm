import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBanner } from "@types";
import styles from "./homeBanner.module.scss";
import { CustomLink } from "components/CustomLink";
import { PATH } from "constants/path";

interface HomeBannerProps {
  banners: IBanner[];
}

const stylesSwiper = {
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
  overflow: "hidden",
};

const HomeBanner = ({ banners }: HomeBannerProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Swiper loop navigation={true} modules={[Navigation]} style={stylesSwiper}>
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <CustomLink href={`${PATH.watch}/1/${banner.id}`}>
                <picture>
                  <img alt={banner.title} src={banner.imageUrl} className={styles.thumbnail} />
                </picture>
              </CustomLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeBanner;
