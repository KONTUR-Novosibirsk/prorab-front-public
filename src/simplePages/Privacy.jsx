import { useEffect } from "react";
import "./Docs.sass";

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className="userTerm usePrivacy"
            style={{
                padding: "40px 15px 40px 15px",
            }}>
            <h5 className="text-align">Политика конфиденциальности</h5>
            <p>
                Настоящие Правила являются официальным документом Компании и определяют порядок обработки и защиты
                информации о физических лицах (Посетителях, Пользователях), посещающих и пользующихся услугами
                Интернет-сайта foreman-go.ru, в том числе через Мобильное приложение (если будет разработано Компанией),
                обеспечивающее доступ к функциональности Интернет-ресурса foreman-go.ru (далее – «Сайт») и его Сервисов.{" "}
                <br />
                Целью настоящих Правил является обеспечение надлежащей защиты информации о Посетителях (Пользователях),
                в том числе их персональных данных, от несанкционированного доступа и разглашения. <br />
                Отношения, связанные со сбором, хранением, распространением и защитой информации о Посетителях
                (Пользователях) Сайта, регулируются настоящими Правилами, иными официальными документами Компании и
                действующим законодательством Российской Федерации. Действующая редакция Правил доступна любому
                пользователю сети на сайте foreman-go.ru. <br />
                Компания вправе вносить изменения в настоящие Правила. При внесении изменений в Правила Администрация
                Сайта уведомляет об этом Посетителей (Пользователей) путём размещения новой редакции Правил на Сайте.
                Регистрируясь и/или используя Сайт, Посетитель (Пользователь) выражает своё согласие с условиями
                настоящих Правил. <br />В случае несогласия Посетителя (Пользователя) с условиями настоящих Правил
                использование Сайта и его Сервисов должно быть немедленно прекращено.
            </p>
            <p>
                Настоящие Правила применяются только в отношении Сайта и его Сервисов. Компания не контролирует и не
                несет ответственности за действия третьих лиц, в том числе за сайты третьих лиц, на которые Посетители
                (Пользователи) могут перейти по ссылкам, доступным на Сайте.
            </p>
            <p>
                Применительно к отдельным случаям сбора и обработки персональных данных Компания может опубликовать на
                Сайте иные и/или дополнительные правила, применимые к таким отдельным случаям. Если иное не указано в
                таких правилах, специальные правила имеют преимущественное значение по отношению к настоящему документу
                в отношении сбора и обработки персональных данных в таких отдельных случаях.
            </p>
            <p className="strong text-align m0">1. Условия пользования Сайтом</p>

            <p className="m0">
                Оказывая услуги по использованию Сайта и его Сервисов (далее – «Услуги Сайта»), Компания, действуя
                разумно и добросовестно, считает, что Посетитель (Пользователь):
            </p>
            <ul>
                <li>
                    обладает всеми необходимыми правами, позволяющими ему осуществлять Регистрацию и использовать
                    настоящий Сайт;
                </li>
                <li>указывает достоверную информацию о себе в объёмах, необходимых для пользования Услугами Сайта;</li>
                <li>
                    осознает, что информация на Сайте, размещаемая Пользователем о себе, может становиться доступной для
                    других Посетителей (Пользователей) Сайта и пользователей Интернета, может быть скопирована и
                    распространена такими пользователями;
                </li>
                <li>
                    осознает, что некоторые виды информации, переданные им другим Посетителям (Пользователям), не могут
                    быть удалены самим Посетителем (Пользователем);
                </li>
                <li>
                    ознакомлен с настоящими Правилами, выражает своё согласие с ними и принимает на себя указанные в них
                    права и обязанности.
                </li>
                <li>
                    Компания не проверяет достоверность получаемой (собираемой) информации о Посетителях
                    (Пользователях), за исключением случаев, когда такая проверка необходима в целях исполнения
                    Компанией обязательств перед Пользователем.
                </li>
            </ul>
            <p className="strong text-align m0">2. Цель обработки информации</p>
            <p>
                Компания осуществляет обработку информации о Посетителях (Пользователях), в том числе их персональных
                данных, с целью заключения Соглашения по инициативе Посетителя (Пользователя) и исполнения Соглашения
                перед Посетителями (Пользователями) в отношении использования Сайта и его Сервисов, в том числе: для
                идентификации субъекта персональных данных как лица, присоединившегося к Соглашению, и персонализации
                предоставляемых Сервисов и Услуг, направления любых уведомлений, сообщений, запросов и информации,
                касающихся использования Сервисов и Услуг, в том числе рекламных сообщений и таргетирования рекламных
                материалов в связи с использованием Ресурса, обработки запросов и обращений от субъекта персональных
                данных, улучшения качества и расширение Сервисов и Услуг, проведения статистических и иных исследований,
                предоставления возможности заключения субъектом персональных данных договора с лицом, разместившим
                объявление/задание, по инициативе субъекта персональных данных, идентификации субъекта персональных
                данных как стороны по договору, исполнения субъектом персональных данных обязательств по договору.
            </p>
            <p className="strong text-align m0">3. Состав информации о Пользователях</p>
            <p className="m0">Персональные данные Пользователей включают в себя:</p>
            <ul>
                <li>
                    предоставляемые Пользователями и минимально необходимые для Регистрации на Сайте: имя, фамилия, дата
                    рождения, номер мобильного телефона, адрес электронной почты;
                </li>
                <li>
                    дополнительно предоставляемые Пользователями по запросу Компании в целях исполнения Компанией
                    вытекающих из Соглашения обязательств перед Пользователями при прохождении процедуры Верификации, а
                    именно: имя, фамилия, адрес электронной почты, дата рождения, аккаунты в соцсетях, контактный
                    телефон. Компания вправе, в частности, запросить у Пользователя копию документа, удостоверяющего
                    личность, либо иного документа, содержащего имя, фамилию, фотографию Пользователя, а также иную
                    дополнительную информацию, которая по усмотрению Администрации Сайта будет являться необходимой и
                    достаточной для идентификации такого Пользователя и позволит исключить злоупотребления и нарушения
                    прав третьих лиц;
                </li>
                <li>
                    дополнительно предоставляемые Пользователем в случае прохождения проверки личных данных паспортные
                    данные (гражданство, дата, место рождения, пол, серия, номер паспорта, орган, дата выдачи),
                    фотография;
                </li>
                <li className="m0">
                    предоставляемые Посетителями (Пользователями) в случае направления ими Предложения (отклика) на
                    объявление: имя, фамилия, гражданство, город проживания, номер телефона, адрес электронной почты,
                    иную информацию в соответствующем информационном сообщении.
                </li>
            </ul>
            <p className="strong text-align m0">
                4. Иная информация о Посетителях (Пользователях), обрабатываемая Компанией
            </p>
            <p className="m0">
                Компания обрабатывает также иную информацию о Посетителях (Пользователях), которая включает в себя:
            </p>
            <ul>
                <li>
                    стандартные данные, автоматически получаемые http-сервером при доступе к Сайту и последующих
                    действиях Посетителя (Пользователя) (IP-адрес хоста, вид операционной системы, посещаемые страницы
                    Сайта), информацию, содержащую историю посещения Сайта;
                </li>
                <li>информацию, автоматически получаемую при доступе к Сайту с использованием закладок (cookies);</li>
                <li>
                    информацию, создаваемую Пользователями на Сайте: фотографии, аудиозаписи, видеозаписи, комментарии;
                </li>
                <li>
                    информацию, полученную в результате действий других Посетителей (Пользователей) на Сайте (в
                    частности, Предложения к Заданиям, Отзывы, Объявления);
                </li>
                <li>
                    координаты, определяющие местонахождение мобильного устройства Посетителя (Пользователя), на котором
                    установлено мобильное приложение для доступа к Сервису (данные геолокации)
                </li>
            </ul>
            <p className="strong text-align m0">5. Меры по защите информации о Посетителях (Пользователях)</p>
            <p>
                Компания принимает правовые, организационные и технические меры в целях обеспечения защиты персональных
                данных Посетителя (Пользователя) от неправомерного или случайного доступа к ним, уничтожения, изменения,
                блокирования, копирования, распространения, а также от иных неправомерных действий. Меры безопасности
                информации о физических лицах, направивших Заявку, предпринимаются на основе Приказа ФСТЭК России от
                18.02.2013 № 21. Сотрудники Компании несут ответственность за обеспечение соблюдения Политики. Хранение
                информации осуществляется в форме, позволяющей определить субъекта информации не дольше, чем этого
                требуют цели обработки. При осуществлении хранения информации Компания использует базы данных,
                находящиеся на территории Российской Федерации. В случае подтверждения факта неточности информации или
                выявления неправомерности их обработки, информация подлежит актуализации, а неправомерная обработка –
                прекращению. Для предотвращения несанкционированного доступа к персональным данным применяются следующие
                организационно-технические меры:
            </p>
            <ul>
                <li>назначение должностных лиц, ответственных за организацию обработки и защиты информации;</li>
                <li>
                    организация внутреннего контроля соответствия обработки информации требованиям законодательства и
                    принятым в соответствие с ним нормативным правовым актам, локальным нормативным актам Компании;
                </li>
                <li>ограничение состава лиц, допущенных к обработке информации;</li>
                <li>организация учета, хранения и обращения носителей, содержащих информацию;</li>
                <li>
                    определение угроз безопасности информации при ее обработке, формирование моделей угроз, разработка
                    системы защиты информации
                </li>
                <li>проверка готовности и эффективности использования средств защиты информации;</li>
                <li>
                    применение в необходимых случаях средств межсетевого экранирования, обнаружения вторжений, анализа
                    защищенности, средств криптографической и других средств защиты информации;
                </li>
                <li>
                    осуществление внутреннего контроля за соблюдением требований законодательства Российской Федерации
                </li>
            </ul>
            <p>
                Для авторизации доступа к Сайту используется Логин (адрес электронной почты) и Пароль Пользователя.
                Ответственность за сохранность данной информации несёт Пользователь. Пользователь не вправе передавать
                собственный Логин и Пароль третьим лицам, а также обязан предпринимать меры по обеспечению их
                конфиденциальности.
            </p>
            <p className="strong text-align m0">6. Обработка информации о Посетителях (Пользователях)</p>
            <p>Обработка персональных данных осуществляется Компанией на основе принципов:</p>
            <ul>
                <li>законности целей и способов обработки персональных данных;</li>
                <li>добросовестности;</li>
                <li>
                    соответствия целей обработки персональных данных целям, заранее определённым и заявленным при сборе
                    персональных данных, а также полномочиям Администрации Сайта;
                </li>
                <li>
                    соответствия объёма и характера обрабатываемых персональных данных, способов обработки персональных
                    данных целям обработки персональных данных;
                </li>
                <li>
                    недопустимости объединения созданных для несовместимых между собой целей баз данных, содержащих
                    персональные данные.
                </li>
            </ul>
            <p className="strong text-align m0">7. Условия и цель обработки персональных данных</p>
            <p>
                Компания осуществляет обработку персональных данных Посетителя (Пользователя) с целью заключения
                Соглашения по инициативе Посетителя (Пользователя) и исполнения Соглашения. В силу статьи 6 Федерального
                закона от 27.07.2006 № 152-ФЗ «О персональных данных» отдельное согласие субъекта персональных данных на
                обработку не требуется.
            </p>
            <p className="strong text-align m0">8. Сбор персональных данных и иной информации</p>
            <p>
                Сбор персональных данных и иной информации Посетителя (Пользователя) осуществляется на Сайте при
                использовании Сайта, Регистрации и Верификации (при наличии), а также в дальнейшем при внесении
                Пользователем по своей инициативе дополнительных сведений о себе с помощью сервисов Сайта. Персональные
                данные предоставляются Пользователем и являются необходимыми при Регистрации или Верификации. Сбор
                персональных данных и иной информации Посетителя (Пользователя) осуществляется также при направления
                Посетителем (Пользователем) Предложения (отклика) на Объявление, в том числе на поддоменах Сайта – по
                поручению Компании ООО «Миговеб» (ОГРН 1140411000124, ИНН 0411167510)
            </p>
            <p className="strong text-align">9. Передача персональных данных</p>
            <p className="m0">
                Персональные данные Посетителей (Пользователей) не передаются Компанией каким-либо третьим лицам, за
                исключением предоставления персональных данных Посетителей (Пользователей) в целях исполнения настоящего
                Соглашения и пользования услугами Сайта, а также по запросу компетентных государственных органов
                (Прокуратуры, полиции, суда и иных) в целях соблюдения норм действующего законодательства РФ и в случае,
                указанном в настоящем пункте. Компания вправе предоставить ваши данные в случаях:
            </p>
            <ul>
                <li>поступил запрос правоохранительных, судебных и иных государственных органов;</li>
                <li> компания получила информацию о возможных незаконных действиях;</li>
                <li> в иных случаях в рамках применимого к сторонам законодательства.</li>
            </ul>
            <p>
                В случае направления Посетителем (Пользователем) Предложения (отклика) на объявление/задание, компания
                имеет право передавать сообщенные Посетителем (Пользователем) имя, фамилию, гражданство, город
                проживания, номер телефона, адрес электронной почты и иную сообщенную путем направления Предложения
                (отклика) на объявление/задание информацию юридическим лицам или индивидуальным
                предпринимателям/физическими лицами, размещающим объявление/задание, в целях ведения ими и Посетителем
                (Пользователем) дальнейших переговоров о выполнении работ/оказании услуг, указанных в Вакансии, и
                заключения договора, идентификации Посетителя (Пользователя) как стороны по договору, исполнения
                Посетителем (Пользователем) обязательств по договору. Находясь на сайте foreman-go.ru посетители
                соглашаются с персональными данными, соглашениями, обработкой и иными документами разработанными
                Компанией.
            </p>
            <p>
                Компания может использовать куки-файлы (cookies) и веб-маяки (beacons) для помощи в анализе потока
                информации, индивидуальной настройки услуг, информационного наполнения и рекламы, а также для измерения
                эффективности сайтов и обеспечения надёжности и безопасности, с целью исследований рынка, отслеживания
                доходов, а также для улучшения функциональности веб-сайтов, мониторинга выполнения настоящих условий,
                охраны законных прав и интересов. Несмотря на то, что куки-файлы деперсонализированы, Пользователи
                всегда могут отказаться от их сохранения, поскольку эта функция определяется настройками браузера
                Пользователя.
            </p>
            <p className="m0">Компания может также предоставлять персональные данные Пользователей:</p>
            <ul>
                <li>
                    провайдерам услуг, которые оказывают предусмотренное соглашениями содействие в предоставлении
                    Продуктов (например, расследование мошенничеств, сбор платежей, обслуживание клиентов, услуги
                    консультантов);
                </li>
                <li>
                    третьим лицам, которым Пользователи прямо просят Компанию направить свои персональные данные (или о
                    которых Пользователи прямо уведомлены иным образом и соглашаются при использовании специальных
                    услуг);
                </li>
                <li>
                    правоохранительным органам, иным государственным органам или третьим лицам в ответ на запрос
                    информации в рамках расследования уголовных дел, иной противоправной деятельности или любой
                    деятельности, которая может повлечь привлечение к ответственности Компании или её Пользователей.
                </li>
            </ul>
            <p style={{ marginTop: "20px" }}>
                Компания постоянно совершенствует способы сбора, хранения и обработки данных, включая меры безопасности.
                В связи с этим, а также в случаях изменения законодательства о персональных данных Компания в любой
                момент может изменить настоящую Политику, уведомив об этом Пользователей на веб-сайтах Компании.
                Продолжение использования Продуктов после внесения таких изменений подтверждает согласие Пользователя с
                такими изменениями, если получение отдельного согласия не требуется законом.
            </p>
        </div>
    );
};

export default Privacy;
