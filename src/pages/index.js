import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import catModel from '../images/Cat_w_shadow.png';
import pawPrints from '../images/Paw_Prints.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitek Family Farm</title>
        <meta name="description" content="A family website for adopting kittens!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.rectangle}>
        <div className={styles.quote}>
          <h1>"From Our Farm 
              to Your Heart, 
              Meet Your Baby!"
          </h1>
          </div>
      </div>
      <Image src={pawPrints} alt="Paw Prints" className={styles.pawPrints} draggable="false" onMouseDown={(e) => e.preventDefault()}/>
      <Image src={catModel} alt="Kitten Model" className={styles.catModel} draggable="false" onMouseDown={(e) => e.preventDefault()}/>

    </>
  );
}
