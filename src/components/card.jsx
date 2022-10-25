import React from 'react';
import thumbnail1 from '../assets/thumbnail-bangunbumiinvestama.webp';
import thumbnail2 from '../assets/thumbnail-landpage.webp';
import thumbnail3 from '../assets/thumbnail-icat.webp';
import thumbnail4 from '../assets/thumbnail-appland.webp';
import thumbnail5 from '../assets/thumbnail-tesla-cloning.webp';
import thumbnail6 from '../assets/thumbnail-nufruit.webp';
import thumbnail7 from '../assets/thumbnail-disney.webp';
import thumbnail8 from '../assets/thumbnail-simple-fetch.webp';
import thumbnail9 from '../assets/thumbnail-practice-portofolio.webp';
import thumbnail10 from '../assets/thumbnail-portofolio.webp';

import thumbnail11 from '../assets/thumbnail-vss.png';
import thumbnail12 from '../assets/thumbnail-samplish.png';
import thumbnail13 from '../assets/thumbnail-nike-store.png';
import thumbnail14 from '../assets/thumbnail-next-amazona.png';

const Card = () => {
  const data = [
    {
      id: 1,
      image: thumbnail1,
      title: 'Bangun Bumi Investama',
      description:
        'Ini merupakan proyek website landing page investasi di bidang pertanian. Teknologi yang digunakan adalah CMS Wordpress dan Elementor.',
      demo: 'https://bangunbumiinvestama.com',
      github: '',
    },
    {
      id: 2,
      image: thumbnail2,
      title: 'i-Works Landing Page',
      description:
        'Ini merupakan website landing page yang mengikut tutorial dari channel youtube WPU. Website ini dibuat untuk melatih keterampilan saya dalam menggunakan framework Bootstrap 4. Teknologi yang digunakan adalah HTML, CSS dan Bootstrap 4.',
      demo: 'https://rommyth.github.io/practice-landing-page/',
      github: 'https://github.com/rommyth/practice-landing-page',
    },
    {
      id: 3,
      image: thumbnail3,
      title: 'iCat',
      description:
        'Ini merupakan proyek frontend pertama saya yaitu website e-commerce penjualan kucing. Website ini dibuat bagi user yang ingin mencari binatang peliharaan kucing imut dan manis dari berbagai jenis kucing yang ada. Teknologi yang digunakan adalah HTML, CSS dan Bootstrap 5.',
      demo: 'https://rommyth.github.io/icat/',
      github: 'https://github.com/rommyth/icat',
    },
    {
      id: 4,
      image: thumbnail4,
      title: 'Appland',
      description:
        'Ini merupakan website Appland. Website ini dibuat untuk melatih keterampilan saya dalam memahami ReactJS yang befokus pada proses slicing section dan components. Teknologi yang digunakan adalah HTML dan ReactJS.',
      demo: 'https://rommyth.github.io/practice-appland/',
      github: 'https://github.com/rommyth/practice-appland',
    },
    {
      id: 5,
      image: thumbnail5,
      title: 'Tesla Cloning',
      description:
        'Ini merupakan website cloning dari TESLA. Website ini dibuat untuk melatih keterampilan saya dalam memahami penggunaan ReactJS dan Styled Components. Teknologi yang digunakan adalah HTML, CSS, ReactJS dan Styled Components.',
      demo: 'https://rommyth.github.io/tesla-cloning/',
      github: 'https://github.com/rommyth/tesla-cloning',
    },
    {
      id: 6,
      image: thumbnail6,
      title: 'Nufruit',
      description:
        'Ini merupakan konversi website yang di design oleh channel youtube Web Design Project. Website ini dibuat untuk melatih keterampilan mengonversi sebuah design Figma kedalam ReactJS. Teknologi yang digunakan adalah HTML, CSS, React Bootstrap dan ReactJS.',
      demo: 'https://rommyth.github.io/practice-nufruit/',
      github: 'https://github.com/rommyth/practice-nufruit',
    },
    {
      id: 7,
      image: thumbnail7,
      title: 'i - Movies',
      description:
        'Ini merupakan website cloning Disney Plus. Website ini dibuat untuk melatih keterampilan saya dalam mengonsumsi sebuah TMDB API di ReactJS. Teknologi yang digunakan adalah HTML, CSS, RaactJS dan Styled Components.',
      demo: 'https://rommyth.github.io/practice-moviesdb/',
      github: 'https://github.com/rommyth/practice-moviesdb',
    },
    {
      id: 8,
      image: thumbnail8,
      title: 'i - Simple Fetch',
      description:
        'Ini merupakan website menapilkan data user. Website ini dibuat untuk melatih keterampilan saya dalam fetching data di NextJS dan memahami konsep dasar Server Side Rendering. Teknologi yang digunakan adalah HTML, CSS dan NextJS.',
      demo: 'https://practice-simple-fetch-nljhu5zkh-webicat.vercel.app/',
      github: 'https://github.com/rommyth/practice-simple-fetch',
    },
    {
      id: 9,
      image: thumbnail9,
      title: 'Portofolio Cloning',
      description:
        'Ini merupakan website cloning portofolio dari channel youtube EGATOR. Website ini dibuat untuk melatih keterampilan saya dalam menggunakan ReactJS, Form Contact dan reCAPTCHA. Teknologi yang digunakan adalah HTML, CSS dan ReactJS.',
      demo: 'https://rommyth.github.io/practice-react-portofolio/',
      github: 'https://github.com/rommyth/practice-react-portofolio',
    },
    {
      id: 10,
      image: thumbnail10,
      title: 'My Web Portofolio',
      description:
        'Ini merupakan website portofolio yang sedang anda kunjungi ssaat ini. Teknologi yang digunakan pada website ini adalah HTML, CSS, Tailwind dan ReactJS. Sistem validasi menggunakan reCAPTCHA dan untuk pengiriman pesan menggunakan EmailJS.',
      demo: '',
      github: 'https://github.com/rommyth/',
    },
    {
      id: 11,
      image: thumbnail11,
      title: 'Venturi Startup Studio',
      description:
        'Ini merupakan website Verturi Startup Studio. Teknologi yang digunakan pada website ini adalah Tailwind dan ReactJS',
      demo: 'https://venturistartup.studio/',
      github: '',
    },
    {
      id: 12,
      image: thumbnail12,
      title: 'Samplish.io',
      description:
        'Ini merupakan website Samplish.io yang menjalankan program tester produk baru yang dibuat oleh sebuah perushaan untuk mendapatkan feedback dari para tester dalam jumlah banyak. Pekerjaan yang saya lakukan yaitu men-slicing seluruh bagian frontend menggunakan NextJS. ',
      demo: 'https://samplish.io',
      github: '',
    },
    {
      id: 13,
      image: thumbnail13,
      title: 'Nike Store SPA',
      description:
        'Ini merupakan website Single Page Application Nike Store. Teknologi yang digunakan pada website ini adalah ViteJS dengan template React dan State Management menggunakan Redux Toolkit.',
      demo: 'https://nike-store-redux-rommyth.vercel.app/',
      github: 'https://github.com/rommyth/nike-store-redux',
    },
    {
      id: 14,
      image: thumbnail14,
      title: 'Next Amazona',
      description:
        'Ini merupakan website ECommerce Amazona. Teknologi yang digunakan adalah NextJS, React Redux, Tailwind, dan MongoDB.',
      demo: 'https://next-amazona-tl.vercel.app/',
      github: 'https://next-amazona-tl.vercel.app/',
    },
  ];
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 py-14">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white duration-200 ease hover:scale-105 drop-shadow hover:drop-shadow-lg"
        >
          <div className="p-8 cursor-default">
            <div>
              <img
                className="w-full h-full"
                src={item.image}
                alt={item.title}
              />
            </div>
            <h3 className="font-semibold text-xl">{item.title}</h3>
            <p className="text-base lg:text-sm font-serif mt-4 leading-5 ">
              {item.description}
            </p>
            <div className="grid grid-cols-2 text-tiny font-medium text-center gap-2 tracking-widest items-center pt-5">
              <a
                href={item.demo}
                aria-label={item.title}
                className="bg-purple-500 py-2 text-white duration-200 hover:bg-purple-700"
                style={{
                  pointerEvents: item.demo === '' ? `none` : '',
                  opacity: item.demo === '' ? '.5' : '1',
                }}
                target="_blank"
                rel="noreferrer"
              >
                LIVE DEMO
              </a>
              <a
                href={item.github}
                className="border py-2 opacity-70 duration-200 hover:bg-gray-200"
                style={{
                  pointerEvents: item.github === '' ? 'none' : '',
                  opacity: item.github === '' ? '.5' : '1',
                }}
                target="_blank"
                rel="noreferrer"
              >
                SEE REPO
              </a>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Card;
