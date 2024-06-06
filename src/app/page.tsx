import * as style from "@style/test.css";

export default function Home() {
  return (
    <main className={style.container}>
      <div className={style.wrapper}>
        <span className={style.text}>some text</span>
        <span className={style.sub_text}>some subset text</span>
      </div>
      <div className={style.wrapper_primary}>
        <span className={style.text}>some text</span>
        <span className={style.sub_text}>some subset text</span>
      </div>
      <div className={style.wrapper_accent}>
        <span className={style.text}>some text</span>
        <span className={style.sub_text}>some subset text</span>
      </div>
    </main>
  );
}
