import styles from "./Faq.module.scss";
import FAQuestion from "../../components/FAQuestion/FAQuestion";

const Faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div>
          <div className={styles.title}>
            <h2>Популярные вопросы</h2>
          </div>
          <FAQuestion
            questionTitle="Как пользоваться сервисом"
            questionAnswer="На Onlinejobx вы можете быть заказчиком и исполнителем.
                Регистрация на сайте бесплатна. Чтобы стать исполнителем, начать
                оказывать услуги и зарабатывать деньги, вам нужно дополнительно
                стать исполнителем. Как это сделать, читайте здесь."
          />
          <FAQuestion
            questionTitle="Как не быть обманутым"
            questionAnswer="На Onlinejobx вы можете быть заказчиком и исполнителем.
                Регистрация на сайте бесплатна. Чтобы стать исполнителем, начать
                оказывать услуги и зарабатывать деньги, вам нужно дополнительно
                стать исполнителем. Как это сделать, читайте здесь."
          />
          <FAQuestion
            questionTitle="Как работает чат"
            questionAnswer="На Onlinejobx вы можете быть заказчиком и исполнителем.
                Регистрация на сайте бесплатна. Чтобы стать исполнителем, начать
                оказывать услуги и зарабатывать деньги, вам нужно дополнительно
                стать исполнителем. Как это сделать, читайте здесь."
          />
          <FAQuestion
            questionTitle="Как предложить задание конкретному исполнителю"
            questionAnswer="На Onlinejobx вы можете быть заказчиком и исполнителем.
                Регистрация на сайте бесплатна. Чтобы стать исполнителем, начать
                оказывать услуги и зарабатывать деньги, вам нужно дополнительно
                стать исполнителем. Как это сделать, читайте здесь."
          />
          <FAQuestion
            questionTitle="Как расчитывается рейтинг"
            questionAnswer="На Onlinejobx вы можете быть заказчиком и исполнителем.
                Регистрация на сайте бесплатна. Чтобы стать исполнителем, начать
                оказывать услуги и зарабатывать деньги, вам нужно дополнительно
                стать исполнителем. Как это сделать, читайте здесь."
          />
          <FAQuestion
            questionTitle="Какие задания запрещено размещать"
            questionAnswer="На Onlinejobx вы можете быть заказчиком и исполнителем.
                Регистрация на сайте бесплатна. Чтобы стать исполнителем, начать
                оказывать услуги и зарабатывать деньги, вам нужно дополнительно
                стать исполнителем. Как это сделать, читайте здесь."
          />
          <FAQuestion
            questionTitle="Почему стоит пользоваться crazy8designs"
            questionAnswer="На Onlinejobx вы можете быть заказчиком и исполнителем.
                Регистрация на сайте бесплатна. Чтобы стать исполнителем, начать
                оказывать услуги и зарабатывать деньги, вам нужно дополнительно
                стать исполнителем. Как это сделать, читайте здесь."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
