"use client";

import { useLayoutEffect, useRef } from "react";
import donut from "@/public/ber.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pro from "@/public/pro.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import foto from "@/public/new.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [pro, pro, pro];
gsap.registerPlugin(ScrollTrigger);

const ContentP = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const donutRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLHeadingElement>(null);
  const textRightRef = useRef<HTMLHeadingElement>(null);

  const glowRef = useRef<HTMLDivElement>(null);
  const infoLeftRef = useRef<HTMLDivElement>(null);
  const infoRightRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  const secondSectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const philosophyContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set(
        [
          textLeftRef.current,
          textRightRef.current,
          glowRef.current,
          infoLeftRef.current,
          infoRightRef.current,
          tagRef.current,
        ],
        { opacity: 0 },
      );

      gsap.set(textLeftRef.current, { x: -120 });
      gsap.set(textRightRef.current, { x: 120 });
      gsap.set(infoLeftRef.current, { x: -40 });
      gsap.set(infoRightRef.current, { x: 40 });
      gsap.set(tagRef.current, { y: -30 });

      tl.to(glowRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      })
        .to(
          donutRef.current,
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 1.6,
            ease: "elastic.out(1, 0.6)",
          },
          "-=1",
        )
        .to(
          [textLeftRef.current, textRightRef.current],
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "expo.out",
          },
          "-=1.2",
        )
        .to(
          tagRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.8",
        )
        .to(
          [infoLeftRef.current, infoRightRef.current],
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.6",
        );

      gsap.to(donutRef.current, {
        y: -20,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(donutRef.current, {
        rotate: 6,
        duration: 5.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(glowRef.current, {
        scale: 1.15,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.set(philosophyContentRef.current, { opacity: 0, y: 40 });

      const overlayTl = gsap.timeline({
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
      });

      overlayTl
        .to(overlayRef.current, {
          xPercent: -100,
          ease: "power2.inOut",
        })
        .to(
          philosophyContentRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
          },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#FFF6E5]"
    >
      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col justify-between relative px-6 py-10 md:px-12 md:py-16">
        <div
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[550px] aspect-square rounded-full bg-[#F2C97E]/30 blur-[80px] z-0 pointer-events-none"
        />

        <div className="w-full flex justify-center z-30 relative md:absolute md:top-24 md:left-0 md:px-12">
          <div
            ref={tagRef}
            className="inline-block bg-[#634D3D] text-[#FFF6E5] text-xs md:text-sm font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full border border-[#FFF6E5]/10 shadow-md mx-auto md:mx-0"
          >
            Premium Taste
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row items-center justify-center my-auto w-full max-w-7xl mx-auto relative gap-8 md:gap-0 pt-12 md:pt-0">
          <div
            ref={infoLeftRef}
            className="w-full md:w-[25%] order-2 md:order-1 text-center md:text-left z-30 flex flex-col gap-3"
          >
            <h3 className="text-xl md:text-2xl font-black text-[#634D3D] tracking-tight">
              ტრადიციული რეცეპტი
            </h3>
            <p className="text-sm md:text-base text-[#634D3D]/80 font-medium leading-relaxed">
              გერმანული კლასიკა, რომელიც იქმნება უმაღლესი ხარისხის კარაქითა და
              ფუმფულა, სათუთად დამუშავებული ცომით.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center relative w-full h-[35vh] sm:h-[40vh] md:h-auto min-h-[260px] order-1 md:order-2">
            <h1
              ref={textLeftRef}
              className="absolute left-[-5%] sm:left-0 md:left-[5%] text-[18vw] md:text-[11vw] font-black uppercase text-[#634D3D] select-none leading-none z-10 drop-shadow-[0_4px_12px_rgba(99,77,61,0.15)]"
              style={{ letterSpacing: "-0.05em" }}
            >
              Ber
            </h1>

            <div
              ref={donutRef}
              className="w-[50vw] sm:w-[45vw] max-w-[340px] md:max-w-[420px] aspect-square relative z-20 pointer-events-none drop-shadow-[0_35px_70px_rgba(99,77,61,0.4)]"
            >
              <Image
                src={donut}
                alt="Berliner Donut"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h1
              ref={textRightRef}
              className="absolute right-[-5%] sm:right-0 md:right-[5%] text-[18vw] md:text-[11vw] font-black uppercase text-[#634D3D] select-none leading-none z-10 drop-shadow-[0_4px_12px_rgba(99,77,61,0.15)]"
            >
              liner
            </h1>
          </div>

          <div
            ref={infoRightRef}
            className="w-full md:w-[25%] order-3 text-center md:text-right z-30 flex flex-col gap-3"
          >
            <h3 className="text-xl md:text-2xl font-black text-[#634D3D] tracking-tight">
              მდიდარი შიგთავსი
            </h3>
            <p className="text-sm md:text-base text-[#634D3D]/80 font-medium leading-relaxed">
              ყოველი ლუკმა სავსეა შოკოლადით ან ვანილის ნაზი, ხელნაკეთი კრემით.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={secondSectionRef}
        className="h-screen w-full bg-[#8C9C86] flex items-center justify-center relative z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.08)] px-6 overflow-hidden"
      >
        <div
          ref={philosophyContentRef}
          className="max-w-3xl text-center flex flex-col gap-6 z-10"
        >
          <span className="text-[#FFF6E5]/60 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
            ჩვენი ფილოსოფია
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#FFF6E5] leading-tight tracking-tight">
            ახალი გემოვნური გამოცდილება
          </h2>
          <p className="text-[#FFF6E5]/80 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto">
            ჩვენ არ ვაცხობთ უბრალოდ დონატებს. ჩვენ ვქმნით პატარა, ყოველდღიურ
            დღესასწაულებს თქვენი საგემოვნო რეცეპტორებისთვის.
          </p>
        </div>

        <div
          ref={overlayRef}
          className="absolute flex  items-center text-center justify-center inset-0 bg-[#634D3D] z-20 will-change-transform"
        >
          <div className="flex flex-col items-center ">
            <h1 className="font-bold text-3xl text-[#FFF6E5]">
              ჩვენთვის გემო ყველაფერია
            </h1>
            <Image src={foto} alt="foto" width={220} />
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen bg-[#634D3D] flex flex-col justify-center items-center gap-10 px-6 py-16 relative z-30">
        <h1 className="text-center font-bold text-3xl md:text-4xl text-[#FFF6E5] tracking-tight">
          ჩვენი პროდუქტები
        </h1>

        <p className="text-center text-[#FFF6E5]/70 max-w-xl text-sm md:text-base">
          ხელნაკეთი დონატების კოლექცია, შექმნილი ტრადიციით და თანამედროვე
          გემოთი.
        </p>

        <div className="w-full max-w-6xl relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            className="!pb-14"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                {({ isActive }) => (
                  <div
                    className={`
                relative flex flex-col items-center justify-center
                transition-all duration-700
                ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-60"}
              `}
                  >
                    <div className="relative w-full max-w-2xl h-[55vh] min-h-[320px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                      <Image
                        src={img}
                        alt={`product-${idx}`}
                        fill
                        className="object-contain p-10"
                        sizes="100vw"
                        priority={idx === 0}
                      />
                    </div>

                    <div className="mt-6 text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-[#FFF6E5]">
                        Premium Berliner #{idx + 1}
                      </h3>
                      <p className="text-[#FFF6E5]/70 text-sm md:text-base mt-2 max-w-md mx-auto">
                        ნაზი კრემი, რბილი ცომი და ხელნაკეთი სრულყოფილება ყოველ
                        ლუკმაში.
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="w-full min-h-screen bg-[#FFF6E5] flex flex-col items-center justify-center px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-[#634D3D] tracking-tight">
            გვიპოვეთ ჩვენ
          </h2>

          <p className="mt-4 text-[#634D3D]/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            გვესტუმრეთ ბათუმში — სუფთა, თბილი და ტკბილი გამოცდილებისთვის.
          </p>
        </div>

        <div className="w-full max-w-6xl h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-[#634D3D]/10 bg-white">
          <iframe
            src="https://www.google.com/maps?q=41.649548,41.628956&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#634D3D]/10">
            <h3 className="font-bold text-[#634D3D]">მდებარეობა</h3>
            <p className="text-sm text-[#634D3D]/70 mt-2">ბათუმი, საქართველო</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#634D3D]/10">
            <h3 className="font-bold text-[#634D3D]">დაგვიკავშირდით</h3>
            <p className="text-sm text-[#634D3D]/70 mt-2">+995 XXX XXX XXX</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#634D3D]/10">
            <h3 className="font-bold text-[#634D3D]">სამუშაო საათები</h3>
            <p className="text-sm text-[#634D3D]/70 mt-2">09:00 – 22:00</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContentP;
