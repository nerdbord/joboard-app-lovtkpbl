import styles from './JobOfferPreview.module.scss';
import classNames from 'classnames';

// components
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import { ButtonType } from '../../enums';

interface JobOfferPreviewProps {
   onClose: () => void;
}

const JobOfferPreview = (props: JobOfferPreviewProps) => {
   return (
      <Modal onClose={props.onClose}>
         <section className={styles.headerSection}>
            <div className={styles.imageContainer}>
               <img src="https://i.imgur.com/yaKYWeN.png" alt="jobtitle" />
            </div>
            <div className={styles.headerText}>
               <h4>Java Developer | Greenfield, Microservices</h4>
               <span>JAVASCRIPT・NEST・TYPESCRIPT・REACT</span>
            </div>
         </section>

         <section className={styles.detailsSection}>
            <div className={styles.descriptionBox}>
               <section className={classNames(styles.sectionBg, styles.descriptionSection)}>
                  <h5>Transportation System Support IT Specialist (Core IT Team)</h5>
                  <article className={styles.jobDescription}>
                     Miejsce pracy: Robakowo (pow. poznański)Nasi specjaliści wspierają pracę
                     zespołów operacyjnych tworząc narzędzia i aplikacje dla całej organizacji z
                     poziomu centrali Grupy Raben. Odpowiadają za utrzymanie ciągłości pracy i
                     rozwój systemów magazynowych, transportowych i finansowych. Dodatkowo inicjują
                     i zapewniają stabilność pracy wszystkich naszych rozwiązań teleinformatycznych.
                     Pracujemy w międzynarodowym środowisku w 15 krajach, a języka angielskiego
                     używamy na co dzień. Podczas realizacji projektów stawiamy na jakość
                     realizowanych zadań, proaktywne podejście do pojawiających się wyzwań oraz
                     współpracę.Posiadasz dobrą znajomość baz danych? Cechuje Cię wysoka kultura
                     osobista w kontaktach z użytkownikami? Chciałbyś być częścią zespołu
                     odpowiedzialnego za utrzymanie ciągłości pracy transportowych Grupy Raben?
                     Jeżeli na wszystkie z powyższych pytań odpowiedziałeś/łaś twierdząco weź udział
                     w rekrutacji i dołącz do naszego zespołu ekspertów IT! Razem będziemy inicjować
                     i wdrażać projekty oraz świętować wspólne sukcesy. Obiecujemy swobodę w
                     działaniu oraz zapewniamy, że ani przez chwilę nie będziesz się z Nami
                     nudził/ła. Jeśli, tak jak my, uważasz że praca zespołowa nie jest tylko hasłem,
                     serdecznie zapraszamy.To oferujemy: Stabilne zatrudnienie (umowa o pracę na
                     czas nieokreślony po okresie próbnym) w centralnym departamencie IT Grupy Raben
                     zlokalizowanym w Robakowie k/Poznania Zadania ukierunkowane na tworzenie
                     rozwiązań dedykowanych dla Klienta wewnętrznego Codzienny kontakt z j.
                     angielskim (praca w międzynarodowym środowisku) Możliwość realizacji zadań w
                     trybie hybrydowym (50% stacjonarnie w Robakowie k. Poznania, 50% telepraca)
                     oraz elastyczne godziny rozpoczęcia pracy Wynagrodzenie podstawowe (negocjowane
                     okresowo) oraz bonus kwartalny uzależniony od poziomu realizacji zleconych
                     zadań Rozwój w wybranym kierunku specjalizacji w ramach Grupy Raben dzięki
                     m.in. ścieżkom rozwoju, szkoleniom oraz awansom i promocji między działowej
                     Dostęp do platformy edukacyjnej UDEMY z możliwością otrzymania certyfikatów
                     potwierdzających ukończenie kursów Dofinansowanie do nauki języka angielskiego
                     i/lub niemieckiego (nauka za pośrednictwem platformy eTutor) Pakiet benefitów
                     pozapłacowych (prywatna opieka medyczna, dofinansowanie do karty sportowej,
                     ubezpieczenie grupowe, ubezpieczenie na życie dla pracowników i ich rodzin,
                     promocje związane z turystyką i sportem na platformie MyBenefit, zniżki na
                     zakup paliwa na wybranych stacjach benzynowych) Wysoką kulturę organizacyjną:
                     możliwość uczestnictwa w akcjach charytatywnych, cykliczne imprezy i eventy
                     firmowe, okresowe konkursy dla pracowników i wiele innych. Twój zakres
                     obowiązków: Zapewnienie stabilności i ciągłości pracy systemów transportowych
                     we wszystkich krajach Grupy Raben Diagnostyka oraz zdalne wsparcie użytkowników
                     Grupy Raben w zakresie rozwiązywania problemów IT (aplikacje transportowe oraz
                     systemy wymiany danych z klientami zewnętrznymi) Udział w pracach projektowych
                     i współpraca z dostawcami oprogramowania Analiza efektywności procesów oraz
                     systematyczne wprowadzanie usprawnień do systemu Nasze wymagania: min. 3 lata
                     doświadczenie w obszarze rozwoju systemów informatycznych Znajomość języka
                     angielskiego na poziomie komunikatywnym (praca w międzynarodowym środowisku)
                     Znajomość PL/SQL na poziomie podstawowym Znajomość Linux lub AIX na poziomie
                     podstawowym Dobra organizacja pracy i umiejętność realizacji kilku zadań w
                     jednym czasie, nastawienie na współpracę oraz zespołową realizację zadań. Mamy
                     DRIVE do rozwoju!I dlatego jako Raben Management Services wypracowujemy
                     optymalne i nowoczesne rozwiązania wspierające wszystkie spółki Grupy Raben.
                     Jesteśmy po to, aby rozwijać i doskonalić nasz biznes.Tworzymy zgrany zespół
                     złożony z najlepszych ekspertów wielu specjalizacji. Są wśród nas mistrzowie
                     logistyki, pasjonaci transportu, cyfrowi magicy w dziale IT, specjaliści do
                     spraw finansów, eksperci w zakresie audytu wewnętrznego, łowcy talentów w
                     dziale HR i wirtuozi sprzedaży.A czego u nas nie ma? Nudy! Każdy dzień to dla
                     nas nowa przygoda i możliwości.Dla Ciebie też? Fantastycznie! W takim razie
                     czekamy właśnie na Ciebie!
                  </article>
               </section>
            </div>
            <section className={styles.infoSection}>
               <section className={classNames(styles.sectionBg, styles.btnSection)}>
                  <Button type={ButtonType.Primary} onClick={() => {}}>
                     Visit offer ➔
                  </Button>
               </section>
               <section>
                  <ul className={classNames(styles.sectionBg, styles.infoList)}>
                     <li className={styles.infoItem}>
                        <h6 className={styles.infoItemTitle}>Added</h6>
                        <span className={styles.infoItemValue}>4 days ago</span>
                     </li>
                     <hr />
                     <li className={styles.infoItem}>
                        <h6 className={styles.infoItemTitle}>Company</h6>
                        <span className={styles.infoItemValue}>GoPro</span>
                     </li>
                  </ul>
               </section>
            </section>
         </section>
      </Modal>
   );
};

export default JobOfferPreview;
