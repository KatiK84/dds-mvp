const RAW_ARTICLES = `|00 Внутреннее перемещение (доход)|Поступление|Техническая операция||Отчет "Оплата по фондам" из 1С|изменил название, было: "Доход - Внутреннее перемещение"
|00 Внутреннее перемещение (расход)|Выбытие|Техническая операция||Отчет "Оплата по фондам" из 1С|изменил название, было: "Расход - Внутреннее перемещение"
|01 фонд GH|Поступление|01 Операционная деятельность|оптовые продажи GH|Отчет "Оплата по фондам" из 1С|
|01 фонд GH (возвраты)|Выбытие|01 Операционная деятельность|возврат денежных средств клиентам GH|Отчет "Оплата по фондам" из 1С|добавил/изменил статью "фонд возвратов клиентам"
|02 фонд EH|Поступление|01 Операционная деятельность|розничные продажи со всех площадок|Отчет "Оплата по фондам" из 1С|не актуальный
|02 фонд EH (возвраты)|Выбытие|01 Операционная деятельность|розничные продажи со всех площадок|Отчет "Оплата по фондам" из 1С|не актуальный
|02 фонд MGH|Поступление|01 Операционная деятельность|мелкооптовые продажи (Bstock, Jobalots, Kleinanzeigen MGH, прямые продажи клиентам, Ebay MGH)|Отчет "Оплата по фондам" из 1С|
|02 фонд MGH (возвраты)|Выбытие|01 Операционная деятельность|возврат денежных средств клиентам MGH|Отчет "Оплата по фондам" из 1С|добавил/изменил статью "фонд возвратов клиентам"
|03 Залог НДС (входящий)|Поступление|01 Операционная деятельность|Залог от покупателя, который потом возвращается покупателю|Отчет "Оплата по фондам" из 1С|изменил название, было: "Залог на НДС входящий"
|03 Залог НДС (исходящий)|Выбытие|01 Операционная деятельность|Залог от покупателя, который потом возвращается покупателю|Отчет "Оплата по фондам" из 1С|изменил название, было: "Залог на НДС исходящий"
|03 фонд Налогов (o. LohnSt. Etc.) (выбытие)|Выбытие|01 Операционная деятельность|налоги, кроме (подоходного налога - Lohnsteuer)|Отчет "Оплата по фондам" из 1С|изменил название, было: "фонд налогов (o. LohnSt. Etc.)"
|03 фонд Налогов (o. LohnSt. Etc.) (поступление)|Поступление|01 Операционная деятельность|возврат налога после перерасчета, кроме (подоходного налога - Lohnsteuer)|Отчет "Оплата по фондам" из 1С|изменил название, было: "фонд налогов (o. LohnSt. Etc.)"
|04 фонд Абонентских плат|Выбытие|01 Операционная деятельность|абонентная плата за телефон, интернет, радио, маркетплейсы, банковские комиссии|Отчет "Оплата по фондам" из 1С|изменил название, было: "фонд абонентских плат"
|04 фонд Административный (выбытие)|Выбытие|01 Операционная деятельность|представительские расходы, командировочные расходы руководящего состава и ключевого административного персонала, привлечение сторонних подрядчиков для поиска и обучения ключевого административного персонала|Отчет "Оплата по фондам" из 1С|добавил статью выбытия
|04 фонд Административный (поступление)|Поступление|01 Операционная деятельность|возврат подотчетных средств, возврат подоходного налога, возврат переплат по ЗП и соц. выплатам, возврат коммунальных платежей|Отчет "Оплата по фондам" из 1С|изменил описание
|04 фонд Непредвиденные расходы|Выбытие|01 Операционная деятельность|фонд нужен только для планирования бюджета, фактические расходы не относить|Отчет "Оплата по фондам" из 1С|изменил название и описание
|04 фонд Подрядчиков|Выбытие|01 Операционная деятельность|оплата копирайтерам, налоговым консультантам (SEK), финансовый консалтинг|Отчет "Оплата по фондам" из 1С|изменил название
|04 фонд Рекламы|Выбытие|01 Операционная деятельность|контекстная реклама, реклама на площадках|Отчет "Оплата по фондам" из 1С|изменил название
|04 фонд Страховок|Выбытие|01 Операционная деятельность|страховки, не связанные с соц. выплатами|Отчет "Оплата по фондам" из 1С|изменил название
|04 фонд Юридических услуг|Выбытие|01 Операционная деятельность|оплата услуг юристов, адвокатов и судебные издержки|Отчет "Оплата по фондам" из 1С|изменил название
|05 фонд Аренды (выбытие)|Выбытие|01 Операционная деятельность|аренда офисов, складских помещений, аренда квартир для сотрудников|Отчет "Оплата по фондам" из 1С|изменил название
|05 фонд Аренды (поступление)|Поступление|01 Операционная деятельность|возвраты по аренде и коммунальным платежам|Отчет "Оплата по фондам" из 1С|добавил статью поступления
|05 фонд АХО|Выбытие|01 Операционная деятельность|картриджи, бумага, бытовая химия, канцтовары, благоустройство территории|Отчет "Оплата по фондам" из 1С|объединил статьи
удалить|05 фонд благоустройства территории|Выбытие|01 Операционная деятельность|цветы, деревья, кусты, удобрение, декорации для двора|Отчет "Оплата по фондам" из 1С|не использовать
удалить|05 фонд жизнедеятельности офиса|Выбытие|01 Операционная деятельность|картриджи для принтеров, бумага, бытовая химия|Отчет "Оплата по фондам" из 1С|не использовать
удалить|05 фонд обновления рабочих инструментов|Выбытие|02 Инвестиционная деятельность|запасные части для сервера, кабели, манекены|Отчет "Оплата по фондам" из 1С|не использовать
|05 фонд Оборудование|Выбытие|02 Инвестиционная деятельность|мебель, офисная техника, комплектующие, запасные части для сервера|Отчет "Оплата по фондам" из 1С|изменил название и описание
|05 фонд Основные средства|Выбытие|02 Инвестиционная деятельность|покупка и ремонт дорогостоящей техники и транспорта от 850 EUR|Отчет "Оплата по фондам" из 1С|изменил название и описание
|05 фонд Ремонт (капитальный)|Выбытие|02 Инвестиционная деятельность|капитальные улучшения объектов ОС|Отчет "Оплата по фондам" из 1С|инвестиционная деятельность
|05 фонд Ремонт (текущий)|Выбытие|01 Операционная деятельность|текущий мелкий ремонт|Отчет "Оплата по фондам" из 1С|операционная деятельность
|06 фонд Корпоративных расходов|Выбытие|01 Операционная деятельность|корпоративы, подарки, мероприятия|Отчет "Оплата по фондам" из 1С|изменил название и описание
|06 фонд Найма|Выбытие|01 Операционная деятельность|расходы на поиск линейного персонала|Отчет "Оплата по фондам" из 1С|изменил название
641|06 фонд Образования|Выбытие|01 Операционная деятельность|курсы и обучающие материалы линейного персонала|Отчет "Оплата по фондам" из 1С|изменил название
поменять на 06 фонд Подрядчиков|06 фонд Провизион третьим лицам|Выбытие|01 Операционная деятельность|провизионы, комиссии, бонусы подрядчикам и посредникам|Отчет "Оплата по фондам" из 1С|изменил название
|06 ФОТ (оклад)|Выбытие|01 Операционная деятельность|оклады местным сотрудникам, соц. отчисления, Lohnsteuer|Отчет "Оплата по фондам" из 1С|разделил оклад и провизион
|06 ФОТ (провизион)|Выбытие|01 Операционная деятельность|бонусы, провизионы, премии местным сотрудникам|Отчет "Оплата по фондам" из 1С|разделил оклад и провизион
|06 ФОТ (EM оклад)|Выбытие|01 Операционная деятельность|оклады сотрудникам удаленного офиса|Отчет "Оплата по фондам" из 1С|разделил оклад и провизион
|06 ФОТ (EM провизион)|Выбытие|01 Операционная деятельность|бонусы, провизионы, премии удаленному офису|Отчет "Оплата по фондам" из 1С|разделил оклад и провизион
|07 фонд Поставщиков (выбытие)|Выбытие|01 Операционная деятельность|приобретаемый товар|Отчет "Оплата по фондам" из 1С|изменил название
|07 фонд Поставщиков (поступление)|Поступление|01 Операционная деятельность|возврат переплаты по приобретаемому товару|Отчет "Оплата по фондам" из 1С|
|07 фонд Складской логистики|Выбытие|01 Операционная деятельность|жизнедеятельность склада: газ, расходники, упаковка, спецодежда|Отчет "Оплата по фондам" из 1С|важно не путать с АХО
|07 фонд Складской логистики (техника)|Выбытие|01 Операционная деятельность|покупка и ремонт мелкого складского транспорта до 850 EUR|Отчет "Оплата по фондам" из 1С|изменил название и описание
|07 фонд Транспортной логистики (входящая)|Выбытие|01 Операционная деятельность|логистика на приобретение товара|Отчет "Оплата по фондам" из 1С|изменил название
|07 фонд Транспортной логистики (исходящая)|Выбытие|01 Операционная деятельность|логистика на отправку товара|Отчет "Оплата по фондам" из 1С|изменил название
|08 фонд Кредитов (% по займам)|Выбытие|01 Операционная деятельность|выплата процентов по кредитам и займам|Отчет "Оплата по фондам" из 1С|изменил название
|08 фонд Кредитов (выбытие)|Выбытие|03 Финансовая деятельность|выплата тела кредитов|Отчет "Оплата по фондам" из 1С|изменил название
|08 фонд Кредитов (поступление)|Поступление|03 Финансовая деятельность|полученные кредиты и займы|Отчет "Оплата по фондам" из 1С|изменил название
|09 фонд Благотворительности|Выбытие|01 Операционная деятельность|списания на благотворительность|Отчет "Оплата по фондам" из 1С|изменил название`;

const SAMPLE_OPERATIONS = `Дата;Контрагент;Статья ДДС;Сумма;Группа;Комментарий
2026-01-05;Client GH GmbH;01 фонд GH;18500;Поступление;Оплата от клиента
2026-01-08;Supplier Lager AG;07 фонд Поставщиков (выбытие);-9200;Выбытие;Оплата поставщику
2026-01-11;DHL;07 фонд Транспортной логистики (исходящая);-1400;Выбытие;Отправки DHL
2026-01-20;Meta Ads;04 фонд Рекламы;-800;Выбытие;Маркетинг
2026-02-02;Marketplace MGH;02 фонд MGH;9500;Поступление;Продажи MGH
2026-02-12;Payroll local;06 ФОТ (оклад);-4300;Выбытие;Зарплата
2026-02-17;Office Tech;05 фонд Оборудование;-1300;Выбытие;Покупка оборудования
2026-03-04;Bank XYZ;08 фонд Кредитов (поступление);25000;Поступление;Получен кредит
2026-03-18;Bank XYZ;;-5000;Выбытие;Погашение кредита`;

const SAMPLE_PLAN_ITEMS = `month;date;legal_entity;bank_account;activity;dds_article;type;amount;probability;scenario;comment
2026-04;2026-04-05;GH GmbH;Deutsche 00;01 Операционная деятельность;01 фонд GH;Поступление;120000;high;base;Оплаты клиентов
2026-04;2026-04-10;GH GmbH;Deutsche 00;01 Операционная деятельность;06 ФОТ (оклад);Выбытие;35000;high;base;Зарплата
2026-04;2026-04-15;GH GmbH;Commerzbank;01 Операционная деятельность;07 фонд Поставщиков (выбытие);Выбытие;42000;medium;base;Закупка`;

const SAMPLE_PLAN_OPENINGS = `month;legal_entity;bank_account;opening_balance
2026-04;GH GmbH;Deutsche 00;75654.83
2026-04;GH GmbH;Commerzbank;10473.01`;

const SAMPLE_PLAN_ASSUMPTIONS = `scenario;inflow_factor;outflow_factor
base;1.00;1.00
pessimistic;0.85;1.10
optimistic;1.10;0.95`;

const STORAGE_ARTICLES_KEY = "dds_mvp_articles_v2";
const STORAGE_BANKS_KEY = "dds_mvp_banks_v1";
const STORAGE_ACCESS_KEY = "dds_mvp_access_v1";
const STORAGE_CHANGE_LOG_KEY = "dds_mvp_change_log_v1";
const STORAGE_PLAN_KEY = "dds_mvp_plan_v1";
const STORAGE_ANALYTICS_KEY = "dds_mvp_analytics_v1";
const STORAGE_RUNTIME_KEY = "dds_mvp_runtime_v1";
const STORAGE_OBLIGATIONS_KEY = "dds_mvp_obligations_v1";
const CHANGE_LOG_LIMIT = 3000;
const ANALYTICS_PRIMARY_FINDINGS_LIMIT = 7;
const UNKNOWN_ARTICLE = "Статья неизвестна";
const UNKNOWN_ACTIVITY = "03 Финансовая деятельность";
const ROLE_CONFIG = {
  ADMIN: {
    label: "Админ",
    rightsLabel: "Полный доступ: настройки, загрузка, разнесение, редактирование справочника.",
    permissions: [
      "report.import",
      "report.export",
      "reconcile.assign",
      "reconcile.export",
      "banks.structure",
      "banks.statement.upload",
      "banks.statement.profile",
      "banks.opening.manage",
      "banks.statement.removeMonth",
      "banks.account.status",
      "access.users.manage",
      "plan.manage",
      "plan.export",
      "analytics.settings",
      "analytics.export",
      "articles.manage",
      "articles.export",
      "changelog.export",
      "changelog.clear",
    ],
  },
  OPERATOR: {
    label: "Оператор",
    rightsLabel: "Операционная работа: загрузка выписок/операций, ручное разнесение, без админ-настроек.",
    permissions: [
      "report.import",
      "report.export",
      "reconcile.assign",
      "reconcile.export",
      "banks.statement.upload",
      "banks.statement.profile",
      "banks.opening.manage",
      "banks.statement.removeMonth",
      "plan.manage",
      "plan.export",
      "analytics.settings",
      "analytics.export",
      "articles.export",
      "changelog.export",
    ],
  },
  VIEWER: {
    label: "Просмотр",
    rightsLabel: "Только просмотр и выгрузки, без изменений данных.",
    permissions: ["report.export", "reconcile.export", "plan.export", "analytics.export", "articles.export", "changelog.export"],
  },
};
const BANK_PARSER_PROFILES = [
  { value: "auto", label: "Автоопределение" },
  { value: "deutsche", label: "Deutsche Bank" },
  { value: "commerz", label: "Commerzbank" },
  { value: "sparkasse", label: "Sparkasse" },
];
const BANK_TEMPLATE_DELIMITERS = [
  { value: "auto", label: "Авто" },
  { value: ";", label: ";" },
  { value: ",", label: "," },
  { value: "tab", label: "TAB" },
];
const runtimeState = loadRuntimeState();
const OBLIGATION_CATEGORY_LABELS = {
  tax: "Налоги",
  salary: "ЗП/ФОТ",
  rent: "Аренда",
  credit: "Кредиты/лизинг",
  other: "Прочее",
};

const state = {
  activeTab: "report",
  articles: loadArticles(),
  banks: loadBanksState(),
  plan: loadPlanState(),
  analytics: loadAnalyticsState(),
  obligations: loadObligationsState(),
  access: loadAccessState(),
  changeLog: loadChangeLog(),
  banksUi: {
    search: "",
    status: "active",
    data: "all",
    expandedByAccountId: {},
    folderImport: {
      legalEntityId: 0,
      parserProfile: "auto",
      items: [],
      statusText: "Выберите папку/несколько CSV для предпросмотра.",
    },
  },
  planUi: {
    editingIndex: -1,
  },
  obligationsUi: {
    editingId: 0,
    suggestions: [],
  },
  operationsRaw: runtimeState.operationsRaw,
  manualAssignments: runtimeState.manualAssignments,
  filteredOperations: [],
  reportRows: [],
  monthRows: [],
};

const els = {
  tabs: document.querySelectorAll(".tab-btn"),
  downloadManagementPackageBtn: document.getElementById("downloadManagementPackageBtn"),
  exportBackupBtn: document.getElementById("exportBackupBtn"),
  importBackupFile: document.getElementById("importBackupFile"),
  importBackupBtn: document.getElementById("importBackupBtn"),
  serviceStatus: document.getElementById("serviceStatus"),
  accessUserSelect: document.getElementById("accessUserSelect"),
  accessNewUserInput: document.getElementById("accessNewUserInput"),
  accessAddUserBtn: document.getElementById("accessAddUserBtn"),
  accessRoleSelect: document.getElementById("accessRoleSelect"),
  accessApplyRole: document.getElementById("accessApplyRole"),
  accessRoleHint: document.getElementById("accessRoleHint"),
  reportTab: document.getElementById("reportTab"),
  planTab: document.getElementById("planTab"),
  obligationsTab: document.getElementById("obligationsTab"),
  analyticsTab: document.getElementById("analyticsTab"),
  banksTab: document.getElementById("banksTab"),
  reconcileTab: document.getElementById("reconcileTab"),
  articlesTab: document.getElementById("articlesTab"),
  changeLogTab: document.getElementById("changeLogTab"),
  changeLogSearch: document.getElementById("changeLogSearch"),
  changeLogActionFilter: document.getElementById("changeLogActionFilter"),
  changeLogRoleFilter: document.getElementById("changeLogRoleFilter"),
  changeLogDateFrom: document.getElementById("changeLogDateFrom"),
  changeLogDateTo: document.getElementById("changeLogDateTo"),
  changeLogExportBtn: document.getElementById("changeLogExportBtn"),
  changeLogClearBtn: document.getElementById("changeLogClearBtn"),
  changeLogStatus: document.getElementById("changeLogStatus"),
  changeLogTableBody: document.getElementById("changeLogTableBody"),
  legalEntityForm: document.getElementById("legalEntityForm"),
  legalEntityNameInput: document.getElementById("legalEntityNameInput"),
  bankAccountForm: document.getElementById("bankAccountForm"),
  bankAccountNameInput: document.getElementById("bankAccountNameInput"),
  bankAccountEntitySelect: document.getElementById("bankAccountEntitySelect"),
  banksEntitySummaryBody: document.getElementById("banksEntitySummaryBody"),
  banksEntityBlocks: document.getElementById("banksEntityBlocks"),
  banksGlobalSummaryBody: document.getElementById("banksGlobalSummaryBody"),
  banksSearch: document.getElementById("banksSearch"),
  banksStatusFilter: document.getElementById("banksStatusFilter"),
  banksDataFilter: document.getElementById("banksDataFilter"),
  banksExpandWithData: document.getElementById("banksExpandWithData"),
  banksCollapseAll: document.getElementById("banksCollapseAll"),
  banksFilterStatus: document.getElementById("banksFilterStatus"),
  bankFolderEntitySelect: document.getElementById("bankFolderEntitySelect"),
  bankFolderParserProfile: document.getElementById("bankFolderParserProfile"),
  bankFolderInput: document.getElementById("bankFolderInput"),
  bankFolderAnalyzeBtn: document.getElementById("bankFolderAnalyzeBtn"),
  bankFolderApplyBtn: document.getElementById("bankFolderApplyBtn"),
  bankFolderClearBtn: document.getElementById("bankFolderClearBtn"),
  bankFolderStatus: document.getElementById("bankFolderStatus"),
  bankFolderPreviewBody: document.getElementById("bankFolderPreviewBody"),
  operationsFile: document.getElementById("operationsFile"),
  loadSampleBtn: document.getElementById("loadSampleBtn"),
  downloadTemplateBtn: document.getElementById("downloadTemplateBtn"),
  fileStatus: document.getElementById("fileStatus"),
  dateFromInput: document.getElementById("dateFrom"),
  dateToInput: document.getElementById("dateTo"),
  activityFilter: document.getElementById("activityFilter"),
  resetFiltersBtn: document.getElementById("resetFilters"),
  downloadReportCsvBtn: document.getElementById("downloadReportCsv"),
  reportMetrics: document.getElementById("reportMetrics"),
  shortDdsTableBody: document.getElementById("shortDdsTableBody"),
  reportTableBody: document.getElementById("reportTableBody"),
  monthTableBody: document.getElementById("monthTableBody"),
  planItemsFile: document.getElementById("planItemsFile"),
  planOpeningsFile: document.getElementById("planOpeningsFile"),
  planAssumptionsFile: document.getElementById("planAssumptionsFile"),
  downloadPlanItemsTemplateBtn: document.getElementById("downloadPlanItemsTemplateBtn"),
  downloadPlanOpeningsTemplateBtn: document.getElementById("downloadPlanOpeningsTemplateBtn"),
  downloadPlanAssumptionsTemplateBtn: document.getElementById("downloadPlanAssumptionsTemplateBtn"),
  clearPlanDataBtn: document.getElementById("clearPlanDataBtn"),
  planScenarioSelect: document.getElementById("planScenarioSelect"),
  planProbabilityFilter: document.getElementById("planProbabilityFilter"),
  downloadPlanCsvBtn: document.getElementById("downloadPlanCsvBtn"),
  planItemsStatus: document.getElementById("planItemsStatus"),
  planOpeningsStatus: document.getElementById("planOpeningsStatus"),
  planAssumptionsStatus: document.getElementById("planAssumptionsStatus"),
  planStatus: document.getElementById("planStatus"),
  planMetrics: document.getElementById("planMetrics"),
  planMonthTableBody: document.getElementById("planMonthTableBody"),
  planActivityTableBody: document.getElementById("planActivityTableBody"),
  planItemForm: document.getElementById("planItemForm"),
  planItemMonth: document.getElementById("planItemMonth"),
  planItemDate: document.getElementById("planItemDate"),
  planItemType: document.getElementById("planItemType"),
  planItemAmount: document.getElementById("planItemAmount"),
  planItemActivity: document.getElementById("planItemActivity"),
  planItemDdsArticle: document.getElementById("planItemDdsArticle"),
  planItemLegalEntity: document.getElementById("planItemLegalEntity"),
  planItemBankAccount: document.getElementById("planItemBankAccount"),
  planItemProbability: document.getElementById("planItemProbability"),
  planItemScenario: document.getElementById("planItemScenario"),
  planItemComment: document.getElementById("planItemComment"),
  planItemSubmitBtn: document.getElementById("planItemSubmitBtn"),
  planItemCancelBtn: document.getElementById("planItemCancelBtn"),
  planItemFormStatus: document.getElementById("planItemFormStatus"),
  planItemsTableBody: document.getElementById("planItemsTableBody"),
  obligationForm: document.getElementById("obligationForm"),
  obligationId: document.getElementById("obligationId"),
  obligationName: document.getElementById("obligationName"),
  obligationCategory: document.getElementById("obligationCategory"),
  obligationLegalEntity: document.getElementById("obligationLegalEntity"),
  obligationBankAccount: document.getElementById("obligationBankAccount"),
  obligationCounterparty: document.getElementById("obligationCounterparty"),
  obligationAmount: document.getElementById("obligationAmount"),
  obligationDay: document.getElementById("obligationDay"),
  obligationStartMonth: document.getElementById("obligationStartMonth"),
  obligationEndMonth: document.getElementById("obligationEndMonth"),
  obligationComment: document.getElementById("obligationComment"),
  obligationActive: document.getElementById("obligationActive"),
  obligationSaveBtn: document.getElementById("obligationSaveBtn"),
  obligationCancelBtn: document.getElementById("obligationCancelBtn"),
  obligationFormStatus: document.getElementById("obligationFormStatus"),
  obligationHorizonDays: document.getElementById("obligationHorizonDays"),
  obligationMetrics: document.getElementById("obligationMetrics"),
  obligationCalendarBody: document.getElementById("obligationCalendarBody"),
  obligationTableBody: document.getElementById("obligationTableBody"),
  obligationLookbackMonths: document.getElementById("obligationLookbackMonths"),
  obligationMinRepeats: document.getElementById("obligationMinRepeats"),
  obligationMinAmount: document.getElementById("obligationMinAmount"),
  obligationSuggestBtn: document.getElementById("obligationSuggestBtn"),
  obligationSuggestStatus: document.getElementById("obligationSuggestStatus"),
  obligationSuggestBody: document.getElementById("obligationSuggestBody"),
  analyticsSettingsForm: document.getElementById("analyticsSettingsForm"),
  analyticsDateFrom: document.getElementById("analyticsDateFrom"),
  analyticsDateTo: document.getElementById("analyticsDateTo"),
  analyticsCompareMode: document.getElementById("analyticsCompareMode"),
  analyticsForecastHorizon: document.getElementById("analyticsForecastHorizon"),
  analyticsForecastMode: document.getElementById("analyticsForecastMode"),
  analyticsScenario: document.getElementById("analyticsScenario"),
  analyticsOpeningBalance: document.getElementById("analyticsOpeningBalance"),
  analyticsSafeBalanceFixed: document.getElementById("analyticsSafeBalanceFixed"),
  analyticsSafeBalancePercent: document.getElementById("analyticsSafeBalancePercent"),
  analyticsSafeBalanceMode: document.getElementById("analyticsSafeBalanceMode"),
  analyticsTop1Threshold: document.getElementById("analyticsTop1Threshold"),
  analyticsTop3Threshold: document.getElementById("analyticsTop3Threshold"),
  analyticsExpenseShareThreshold: document.getElementById("analyticsExpenseShareThreshold"),
  analyticsInvestmentLoadThreshold: document.getElementById("analyticsInvestmentLoadThreshold"),
  analyticsOutflowSurgeThreshold: document.getElementById("analyticsOutflowSurgeThreshold"),
  analyticsOutflowSurgeLookback: document.getElementById("analyticsOutflowSurgeLookback"),
  analyticsScenarioOptimisticInflow: document.getElementById("analyticsScenarioOptimisticInflow"),
  analyticsScenarioOptimisticOutflow: document.getElementById("analyticsScenarioOptimisticOutflow"),
  analyticsScenarioConservativeInflow: document.getElementById("analyticsScenarioConservativeInflow"),
  analyticsScenarioConservativeOutflow: document.getElementById("analyticsScenarioConservativeOutflow"),
  analyticsApplyBtn: document.getElementById("analyticsApplyBtn"),
  analyticsSyncWithReportBtn: document.getElementById("analyticsSyncWithReportBtn"),
  analyticsExportBtn: document.getElementById("analyticsExportBtn"),
  analyticsPrintBtn: document.getElementById("analyticsPrintBtn"),
  analyticsStatus: document.getElementById("analyticsStatus"),
  analyticsSummaryMetrics: document.getElementById("analyticsSummaryMetrics"),
  analyticsFindingsList: document.getElementById("analyticsFindingsList"),
  analyticsToggleFindingsBtn: document.getElementById("analyticsToggleFindingsBtn"),
  analyticsRecommendationsList: document.getElementById("analyticsRecommendationsList"),
  analyticsInflowTopArticlesBody: document.getElementById("analyticsInflowTopArticlesBody"),
  analyticsOutflowTopArticlesBody: document.getElementById("analyticsOutflowTopArticlesBody"),
  analyticsInflowTopCounterpartiesBody: document.getElementById("analyticsInflowTopCounterpartiesBody"),
  analyticsOutflowTopCounterpartiesBody: document.getElementById("analyticsOutflowTopCounterpartiesBody"),
  analyticsComparisonBody: document.getElementById("analyticsComparisonBody"),
  analyticsForecastBody: document.getElementById("analyticsForecastBody"),
  unresolvedOnly: document.getElementById("unresolvedOnly"),
  downloadUnresolvedCsv: document.getElementById("downloadUnresolvedCsv"),
  reconcileStatus: document.getElementById("reconcileStatus"),
  reconcileTableBody: document.getElementById("reconcileTableBody"),
  articleSearch: document.getElementById("articleSearch"),
  articleGroupFilter: document.getElementById("articleGroupFilter"),
  articleActivityFilter: document.getElementById("articleActivityFilter"),
  articleStatusFilter: document.getElementById("articleStatusFilter"),
  addArticleBtn: document.getElementById("addArticleBtn"),
  downloadArticlesCsv: document.getElementById("downloadArticlesCsv"),
  articlesTableBody: document.getElementById("articlesTableBody"),
  articleForm: document.getElementById("articleForm"),
  articleId: document.getElementById("articleId"),
  articleNoInput: document.getElementById("articleNoInput"),
  articleNameInput: document.getElementById("articleNameInput"),
  articleGroupInput: document.getElementById("articleGroupInput"),
  articleActivityInput: document.getElementById("articleActivityInput"),
  articleSourceInput: document.getElementById("articleSourceInput"),
  articleStatusInput: document.getElementById("articleStatusInput"),
  articleDescriptionInput: document.getElementById("articleDescriptionInput"),
  articleCommentInput: document.getElementById("articleCommentInput"),
  cancelArticleEdit: document.getElementById("cancelArticleEdit"),
};

init();

function init() {
  cleanupLegacyPlaceholderEntities(true);
  bindTabs();
  bindServiceEvents();
  bindAccessEvents();
  bindChangeLogEvents();
  bindReportEvents();
  bindPlanEvents();
  bindObligationsEvents();
  bindAnalyticsEvents();
  bindBankEvents();
  bindReconcileEvents();
  bindArticleEvents();
  refreshBankEntitySelect();
  refreshArticleFilterOptions();
  refreshReportActivityOptions();
  applyRuntimeStateToControls(runtimeState);
  if (els.fileStatus && state.operationsRaw.length > 0) {
    els.fileStatus.textContent = `Восстановлено операций из локального состояния: ${state.operationsRaw.length}.`;
  }
  renderBanksTab();
  renderArticlesTable();
  renderReport();
  renderPlanTab();
  renderObligationsTab();
  renderAnalyticsTab();
  renderReconcileTable();
  renderChangeLog();
  applyRoleAccess();
}

function bindTabs() {
  els.tabs.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => setActiveTab(tabBtn.dataset.tab));
  });
}

function bindServiceEvents() {
  els.downloadManagementPackageBtn?.addEventListener("click", downloadManagementPackageCsv);
  els.exportBackupBtn?.addEventListener("click", exportAppBackupFile);
  els.importBackupBtn?.addEventListener("click", importAppBackupFile);
}

function setActiveTab(tabName) {
  state.activeTab = tabName;

  els.tabs.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  els.reportTab.classList.toggle("active", tabName === "report");
  els.planTab.classList.toggle("active", tabName === "plan");
  els.obligationsTab.classList.toggle("active", tabName === "obligations");
  els.analyticsTab.classList.toggle("active", tabName === "analytics");
  els.banksTab.classList.toggle("active", tabName === "banks");
  els.reconcileTab.classList.toggle("active", tabName === "reconcile");
  els.articlesTab.classList.toggle("active", tabName === "articles");
  els.changeLogTab.classList.toggle("active", tabName === "changelog");
}

function bindAccessEvents() {
  if (!els.accessRoleSelect || !els.accessApplyRole || !els.accessUserSelect) return;
  refreshAccessUserOptions();
  els.accessRoleSelect.value = state.access.currentRole;
  els.accessUserSelect.value = normalizeUserName(state.access.currentUser);
  els.accessApplyRole.addEventListener("click", () => {
    const nextRole = String(els.accessRoleSelect.value || "").trim().toUpperCase();
    const nextUser = normalizeUserName(els.accessUserSelect.value);
    setAccessRole(nextRole, nextUser);
  });
  els.accessAddUserBtn?.addEventListener("click", addAccessUser);
  els.accessNewUserInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addAccessUser();
  });
}

function bindChangeLogEvents() {
  if (!els.changeLogTab) return;

  const rerender = () => renderChangeLog();
  els.changeLogSearch.addEventListener("input", rerender);
  els.changeLogActionFilter.addEventListener("change", rerender);
  els.changeLogRoleFilter.addEventListener("change", rerender);
  els.changeLogDateFrom.addEventListener("change", rerender);
  els.changeLogDateTo.addEventListener("change", rerender);

  els.changeLogExportBtn.addEventListener("click", exportChangeLogCsv);
  els.changeLogClearBtn.addEventListener("click", clearChangeLog);
}

function setAccessRole(nextRole, nextUserRaw) {
  const normalized = ROLE_CONFIG[nextRole] ? nextRole : "VIEWER";
  const normalizedUser = normalizeUserName(nextUserRaw);
  const current = state.access.currentRole;
  const currentUser = normalizeUserName(state.access.currentUser);
  const roleChanged = normalized !== current;
  const userChanged = normalizedUser !== currentUser;

  if (!roleChanged && !userChanged) {
    applyRoleAccess();
    return;
  }

  if (roleChanged) {
    const confirmed = window.confirm(`Сменить роль: ${roleLabel(current)} -> ${roleLabel(normalized)}?`);
    if (!confirmed) {
      els.accessRoleSelect.value = current;
      if (els.accessUserSelect) els.accessUserSelect.value = currentUser;
      return;
    }
  }

  state.access.users = normalizeUsersList(state.access.users, normalizedUser);
  state.access.currentUser = normalizedUser;
  state.access.currentRole = normalized;
  saveAccessState(state.access);
  if (userChanged) {
    logChange("USER_CHANGED", "Доступ", `${currentUser} -> ${normalizedUser}`);
  }
  if (roleChanged) {
    logChange("ROLE_CHANGED", "Доступ", `${roleLabel(current)} -> ${roleLabel(normalized)}`);
    closeArticleForm();
    renderBanksTab();
    renderArticlesTable();
    renderReport();
    renderPlanTab();
    renderObligationsTab();
    renderAnalyticsTab();
    renderReconcileTable();
  } else {
    renderChangeLog();
  }
  applyRoleAccess();
}

function hasPermission(permission) {
  const role = ROLE_CONFIG[state.access.currentRole] ? state.access.currentRole : "VIEWER";
  const permissions = ROLE_CONFIG[role].permissions || [];
  return permissions.includes(permission);
}

function requirePermission(permission, denyText) {
  if (hasPermission(permission)) return true;
  if (denyText) alert(denyText);
  return false;
}

function roleLabel(role) {
  return ROLE_CONFIG[role]?.label || "Просмотр";
}

function applyRoleAccess() {
  const role = ROLE_CONFIG[state.access.currentRole] ? state.access.currentRole : "VIEWER";
  const user = normalizeUserName(state.access.currentUser);
  state.access.users = normalizeUsersList(state.access.users, user);
  if (state.access.currentUser !== user) {
    state.access.currentUser = user;
    saveAccessState(state.access);
  }
  refreshAccessUserOptions(user);
  if (els.accessRoleSelect) {
    els.accessRoleSelect.value = role;
  }
  if (els.accessRoleHint) {
    els.accessRoleHint.textContent = `Пользователь: ${user}. Роль: ${roleLabel(role)}. ${ROLE_CONFIG[role].rightsLabel}`;
  }

  const canImportReport = hasPermission("report.import");
  const canExportReport = hasPermission("report.export");
  const canManageBankStructure = hasPermission("banks.structure");
  const canUploadBankStatements = hasPermission("banks.statement.upload");
  const canChangeBankProfile = hasPermission("banks.statement.profile");
  const canExportReconcile = hasPermission("reconcile.export");
  const canManageArticles = hasPermission("articles.manage");
  const canExportArticles = hasPermission("articles.export");
  const canExportChangeLog = hasPermission("changelog.export");
  const canClearChangeLog = hasPermission("changelog.clear");
  const canManageUsers = hasPermission("access.users.manage");
  const canManagePlan = hasPermission("plan.manage");
  const canExportPlan = hasPermission("plan.export");
  const canManageAnalytics = hasPermission("analytics.settings");
  const canExportAnalytics = hasPermission("analytics.export");
  const canExportManagement = hasPermission("report.export");
  const canManageBackup = hasPermission("access.users.manage");

  setElementDisabled(els.downloadManagementPackageBtn, !canExportManagement);
  setElementDisabled(els.exportBackupBtn, !canManageBackup);
  setElementDisabled(els.importBackupFile, !canManageBackup);
  setElementDisabled(els.importBackupBtn, !canManageBackup);
  setElementDisabled(els.operationsFile, !canImportReport);
  setElementDisabled(els.loadSampleBtn, !canImportReport);
  setElementDisabled(els.downloadReportCsvBtn, !canExportReport);

  setFormDisabled(els.legalEntityForm, !canManageBankStructure);
  setFormDisabled(els.bankAccountForm, !canManageBankStructure);
  setElementDisabled(els.bankFolderEntitySelect, !canUploadBankStatements);
  setElementDisabled(els.bankFolderParserProfile, !canChangeBankProfile);
  setElementDisabled(els.bankFolderInput, !canUploadBankStatements);
  setElementDisabled(els.bankFolderAnalyzeBtn, !canUploadBankStatements);
  setElementDisabled(els.bankFolderApplyBtn, !canUploadBankStatements);
  setElementDisabled(els.bankFolderClearBtn, !canUploadBankStatements);

  setElementDisabled(els.downloadUnresolvedCsv, !canExportReconcile);

  setElementDisabled(els.addArticleBtn, !canManageArticles);
  setElementDisabled(els.downloadArticlesCsv, !canExportArticles);
  setElementDisabled(els.changeLogExportBtn, !canExportChangeLog);
  setElementDisabled(els.changeLogClearBtn, !canClearChangeLog);
  setElementDisabled(els.accessAddUserBtn, !canManageUsers);
  setElementDisabled(els.accessNewUserInput, !canManageUsers);
  setElementDisabled(els.planItemsFile, !canManagePlan);
  setElementDisabled(els.planOpeningsFile, !canManagePlan);
  setElementDisabled(els.planAssumptionsFile, !canManagePlan);
  setElementDisabled(els.downloadPlanItemsTemplateBtn, !canManagePlan);
  setElementDisabled(els.downloadPlanOpeningsTemplateBtn, !canManagePlan);
  setElementDisabled(els.downloadPlanAssumptionsTemplateBtn, !canManagePlan);
  setElementDisabled(els.clearPlanDataBtn, !canManagePlan);
  setFormDisabled(els.planItemForm, !canManagePlan);
  setElementDisabled(els.planItemCancelBtn, !canManagePlan);
  setElementDisabled(els.downloadPlanCsvBtn, !canExportPlan);
  setFormDisabled(els.obligationForm, !canManagePlan);
  setElementDisabled(els.obligationCancelBtn, !canManagePlan);
  setElementDisabled(els.obligationHorizonDays, !canManagePlan);
  setElementDisabled(els.obligationLookbackMonths, !canManagePlan);
  setElementDisabled(els.obligationMinRepeats, !canManagePlan);
  setElementDisabled(els.obligationMinAmount, !canManagePlan);
  setElementDisabled(els.obligationSuggestBtn, !canManagePlan);
  setFormDisabled(els.analyticsSettingsForm, !canManageAnalytics);
  setElementDisabled(els.analyticsApplyBtn, !canManageAnalytics);
  setElementDisabled(els.analyticsSyncWithReportBtn, !canManageAnalytics);
  setElementDisabled(els.analyticsExportBtn, !canExportAnalytics);
  setElementDisabled(els.analyticsPrintBtn, !canExportAnalytics);
  if (!canManageArticles) {
    closeArticleForm();
  }
}

function addAccessUser() {
  if (!requirePermission("access.users.manage", "Недостаточно прав: только Админ может добавлять пользователей.")) return;
  const rawName = String(els.accessNewUserInput?.value || "");
  const normalizedRaw = rawName.replace(/\s+/g, " ").trim();
  if (!normalizedRaw) {
    alert("Введите имя пользователя.");
    return;
  }

  const normalized = normalizeUserName(normalizedRaw);
  const users = normalizeUsersList(state.access.users, state.access.currentUser);
  const exists = users.some((name) => normalizeText(name) === normalizeText(normalized));
  if (exists) {
    alert(`Пользователь "${normalized}" уже существует.`);
    state.access.currentUser = users.find((name) => normalizeText(name) === normalizeText(normalized)) || normalized;
    refreshAccessUserOptions(state.access.currentUser);
    return;
  }

  state.access.users = normalizeUsersList([...users, normalized], normalized);
  state.access.currentUser = normalized;
  saveAccessState(state.access);
  refreshAccessUserOptions(normalized);
  if (els.accessNewUserInput) {
    els.accessNewUserInput.value = "";
  }
  logChange("USER_ADDED", "Доступ", `Добавлен пользователь: ${normalized}`);
  applyRoleAccess();
}

function refreshAccessUserOptions(preferredUser) {
  const preferred = normalizeUserName(preferredUser ?? state.access.currentUser);
  const previousUsers = Array.isArray(state.access.users) ? state.access.users.slice() : [];
  const normalizedUsers = normalizeUsersList(previousUsers, preferred);
  const normalizedCurrent =
    normalizedUsers.find((name) => normalizeText(name) === normalizeText(preferred)) || normalizedUsers[0] || "Не указан";

  const usersChanged =
    normalizedUsers.length !== previousUsers.length ||
    normalizedUsers.some((name, index) => normalizeText(name) !== normalizeText(previousUsers[index]));
  const currentChanged = normalizeText(state.access.currentUser) !== normalizeText(normalizedCurrent);

  state.access.users = normalizedUsers;
  state.access.currentUser = normalizedCurrent;

  if (els.accessUserSelect) {
    els.accessUserSelect.innerHTML = normalizedUsers
      .map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`)
      .join("");
    els.accessUserSelect.value = normalizedCurrent;
  }

  if (usersChanged || currentChanged) {
    saveAccessState(state.access);
  }
}

function setElementDisabled(el, disabled) {
  if (!el) return;
  el.disabled = Boolean(disabled);
}

function setFormDisabled(formEl, disabled) {
  if (!formEl) return;
  const controls = formEl.querySelectorAll("input, select, textarea, button");
  controls.forEach((control) => {
    control.disabled = Boolean(disabled);
  });
}

function bindReportEvents() {
  els.operationsFile.addEventListener("change", onFileUploaded);
  els.loadSampleBtn.addEventListener("click", () => {
    if (!requirePermission("report.import", "Недостаточно прав: только Админ или Оператор могут загружать операции.")) return;
    loadOperationsFromText(SAMPLE_OPERATIONS, "пример");
  });
  els.downloadTemplateBtn.addEventListener("click", downloadTemplateCsv);
  els.dateFromInput.addEventListener("change", renderReport);
  els.dateToInput.addEventListener("change", renderReport);
  els.activityFilter.addEventListener("change", renderReport);
  els.resetFiltersBtn.addEventListener("click", resetReportFilters);
  els.downloadReportCsvBtn.addEventListener("click", downloadReportCsv);
}

function bindPlanEvents() {
  els.planItemsFile?.addEventListener("change", (event) => {
    const [file] = event.target.files || [];
    if (!file) return;
    uploadPlanCsv("items", file);
  });

  els.planOpeningsFile?.addEventListener("change", (event) => {
    const [file] = event.target.files || [];
    if (!file) return;
    uploadPlanCsv("openings", file);
  });

  els.planAssumptionsFile?.addEventListener("change", (event) => {
    const [file] = event.target.files || [];
    if (!file) return;
    uploadPlanCsv("assumptions", file);
  });

  els.downloadPlanItemsTemplateBtn?.addEventListener("click", downloadPlanItemsTemplateCsv);
  els.downloadPlanOpeningsTemplateBtn?.addEventListener("click", downloadPlanOpeningsTemplateCsv);
  els.downloadPlanAssumptionsTemplateBtn?.addEventListener("click", downloadPlanAssumptionsTemplateCsv);
  els.downloadPlanCsvBtn?.addEventListener("click", downloadPlanForecastCsv);
  els.clearPlanDataBtn?.addEventListener("click", clearPlanData);

  els.planScenarioSelect?.addEventListener("change", () => {
    state.plan.selectedScenario = normalizePlanScenario(els.planScenarioSelect.value || "base");
    persistPlanAndRender(false);
  });

  els.planProbabilityFilter?.addEventListener("change", () => {
    const next = String(els.planProbabilityFilter.value || "all");
    state.plan.probabilityFilter = ["all", "high", "medium-high"].includes(next) ? next : "all";
    persistPlanAndRender(false);
  });

  els.planItemForm?.addEventListener("submit", onPlanItemFormSubmit);
  els.planItemCancelBtn?.addEventListener("click", cancelPlanItemEdit);
  els.planItemsTableBody?.addEventListener("click", onPlanItemTableClick);
}

function bindObligationsEvents() {
  els.obligationForm?.addEventListener("submit", onObligationFormSubmit);
  els.obligationCancelBtn?.addEventListener("click", cancelObligationEdit);
  els.obligationLegalEntity?.addEventListener("change", () => {
    refreshObligationAccountSelect(Number(els.obligationLegalEntity?.value) || 0, 0);
  });
  els.obligationHorizonDays?.addEventListener("change", () => {
    if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут менять настройки календаря.")) return;
    state.obligations.settings.horizonDays = normalizeIntInRange(els.obligationHorizonDays.value, 30, 7, 90);
    saveObligationsState(state.obligations);
    renderObligationsTab();
  });
  els.obligationSuggestBtn?.addEventListener("click", analyzeObligationSuggestions);

  els.obligationTableBody?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-obligation-action]");
    if (!button) return;
    const id = Number(button.dataset.obligationId);
    if (!Number.isFinite(id)) return;
    const action = String(button.dataset.obligationAction || "");

    if (action === "edit") {
      if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут менять календарь платежей.")) return;
      startObligationEdit(id);
      return;
    }
    if (action === "delete") {
      if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут менять календарь платежей.")) return;
      deleteObligation(id);
      return;
    }
    if (action === "toggle-active") {
      if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут менять календарь платежей.")) return;
      toggleObligationActive(id);
    }
  });

  els.obligationSuggestBody?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-obligation-suggest-action='accept']");
    if (!button) return;
    if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут подтверждать подсказки.")) return;
    const suggestId = Number(button.dataset.suggestId);
    if (!Number.isFinite(suggestId)) return;
    acceptObligationSuggestion(suggestId);
  });
}

function onPlanItemFormSubmit(event) {
  event.preventDefault();
  if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут менять строки плана.")) return;

  try {
    const planItem = buildPlanItemFromFormInputs();
    const editIndex = Number(state.planUi.editingIndex);
    const editing = Number.isInteger(editIndex) && editIndex >= 0 && editIndex < state.plan.items.length;

    if (editing) {
      state.plan.items[editIndex] = planItem;
      logChange(
        "PLAN_ITEM_UPDATED",
        "План/Прогноз",
        `${planItem.month}; ${planItem.type}; ${formatMoney(planItem.amount)}; ${planItem.scenario}`
      );
    } else {
      state.plan.items.push(planItem);
      logChange(
        "PLAN_ITEM_ADDED",
        "План/Прогноз",
        `${planItem.month}; ${planItem.type}; ${formatMoney(planItem.amount)}; ${planItem.scenario}`
      );
    }

    state.plan.items = sortPlanItems(state.plan.items);
    state.planUi.editingIndex = -1;
    ensurePlanScenarioSelection();
    syncPlanItemFormDefaults();
    persistPlanAndRender(false);
  } catch (error) {
    alert(error.message || "Не удалось сохранить строку плана.");
  }
}

function onPlanItemTableClick(event) {
  const button = event.target.closest("button[data-plan-item-action]");
  if (!button) return;
  if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут менять строки плана.")) return;

  const action = String(button.dataset.planItemAction || "");
  const index = Number(button.dataset.planItemIndex);
  if (!Number.isInteger(index) || index < 0 || index >= state.plan.items.length) return;

  if (action === "edit") {
    startPlanItemEdit(index);
    return;
  }

  if (action !== "delete") return;
  const item = state.plan.items[index];
  const confirmDelete = window.confirm(
    `Удалить строку плана?\n${item.month} | ${item.type} | ${formatMoney(item.amount)} | ${item.activity}`
  );
  if (!confirmDelete) return;

  state.plan.items.splice(index, 1);
  if (state.planUi.editingIndex === index) {
    state.planUi.editingIndex = -1;
    syncPlanItemFormDefaults();
  } else if (state.planUi.editingIndex > index) {
    state.planUi.editingIndex -= 1;
  }
  state.plan.items = sortPlanItems(state.plan.items);
  ensurePlanScenarioSelection();
  logChange("PLAN_ITEM_DELETED", "План/Прогноз", `${item.month}; ${item.type}; ${formatMoney(item.amount)}`);
  persistPlanAndRender(false);
}

function startPlanItemEdit(index) {
  const item = state.plan.items[index];
  if (!item) return;
  state.planUi.editingIndex = index;

  if (els.planItemMonth) els.planItemMonth.value = item.month;
  if (els.planItemDate) els.planItemDate.value = item.date || "";
  if (els.planItemType) els.planItemType.value = item.type === "Выбытие" ? "Выбытие" : "Поступление";
  if (els.planItemAmount) els.planItemAmount.value = formatNumberForInput(item.amount);
  if (els.planItemActivity) els.planItemActivity.value = item.activity || "";
  if (els.planItemDdsArticle) els.planItemDdsArticle.value = item.ddsArticle || "";
  if (els.planItemLegalEntity) els.planItemLegalEntity.value = item.legalEntity || "";
  if (els.planItemBankAccount) els.planItemBankAccount.value = item.bankAccount || "";
  if (els.planItemProbability) els.planItemProbability.value = normalizePlanProbability(item.probability);
  if (els.planItemScenario) els.planItemScenario.value = normalizePlanScenario(item.scenario || "base");
  if (els.planItemComment) els.planItemComment.value = item.comment || "";
  renderPlanItemFormState();
}

function cancelPlanItemEdit() {
  state.planUi.editingIndex = -1;
  syncPlanItemFormDefaults();
  renderPlanTab();
}

function syncPlanItemFormDefaults() {
  if (!els.planItemForm) return;
  const defaults = createDefaultPlanItemDraft();
  if (els.planItemMonth) els.planItemMonth.value = defaults.month;
  if (els.planItemDate) els.planItemDate.value = defaults.date;
  if (els.planItemType) els.planItemType.value = defaults.type;
  if (els.planItemAmount) els.planItemAmount.value = "";
  if (els.planItemActivity) els.planItemActivity.value = defaults.activity;
  if (els.planItemDdsArticle) els.planItemDdsArticle.value = "";
  if (els.planItemLegalEntity) els.planItemLegalEntity.value = "";
  if (els.planItemBankAccount) els.planItemBankAccount.value = "";
  if (els.planItemProbability) els.planItemProbability.value = defaults.probability;
  if (els.planItemScenario) els.planItemScenario.value = defaults.scenario;
  if (els.planItemComment) els.planItemComment.value = "";
}

function createDefaultPlanItemDraft() {
  return {
    month: getCurrentMonthKey(),
    date: "",
    type: "Поступление",
    activity: "01 Операционная деятельность",
    probability: "medium",
    scenario: normalizePlanScenario(state.plan?.selectedScenario || "base"),
  };
}

function buildPlanItemFromFormInputs() {
  const monthRaw = String(els.planItemMonth?.value || "").trim();
  const dateRaw = String(els.planItemDate?.value || "").trim();
  const typeRaw = String(els.planItemType?.value || "Поступление");
  const amountRaw = String(els.planItemAmount?.value || "").trim();
  const activityRaw = String(els.planItemActivity?.value || "").trim();
  const scenarioRaw = String(els.planItemScenario?.value || "base").trim();

  const dateObj = parseFlexibleDate(dateRaw);
  const dateMonth = dateObj ? toMonthKey(dateObj) : "";
  const month = normalizeMonthKey(monthRaw || dateRaw);
  if (!month) {
    throw new Error("Укажите месяц строки плана.");
  }
  if (dateObj && dateMonth && dateMonth !== month) {
    throw new Error("Дата должна входить в выбранный месяц.");
  }

  const amount = parseAmount(amountRaw);
  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Сумма должна быть больше 0.");
  }

  return {
    month,
    date: dateObj ? toDateInputValue(dateObj) : "",
    legalEntity: String(els.planItemLegalEntity?.value || "").trim(),
    bankAccount: String(els.planItemBankAccount?.value || "").trim(),
    activity: activityRaw || "Не определено",
    ddsArticle: String(els.planItemDdsArticle?.value || "").trim(),
    type: resolvePlanType(typeRaw, "1"),
    amount: Math.abs(amount),
    probability: normalizePlanProbability(els.planItemProbability?.value || "medium"),
    scenario: normalizePlanScenario(scenarioRaw || "base"),
    comment: String(els.planItemComment?.value || "").trim(),
  };
}

function sortPlanItems(items) {
  return [...(items || [])].sort((a, b) => {
    const byMonth = String(a.month || "").localeCompare(String(b.month || ""));
    if (byMonth !== 0) return byMonth;
    const byDate = String(a.date || "").localeCompare(String(b.date || ""));
    if (byDate !== 0) return byDate;
    const byScenario = String(a.scenario || "").localeCompare(String(b.scenario || ""));
    if (byScenario !== 0) return byScenario;
    return String(a.activity || "").localeCompare(String(b.activity || ""));
  });
}

function uploadPlanCsv(kind, file) {
  if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут загружать план.")) return;
  const fileName = String(file?.name || "").trim();
  if (!fileName.toLowerCase().endsWith(".csv")) {
    alert("Загрузите CSV-файл.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const text = String(reader.result || "");
      if (kind === "items") {
        state.plan.items = sortPlanItems(parsePlanItemsCsv(text));
        state.planUi.editingIndex = -1;
        state.plan.sourceFiles.items = fileName;
        logChange("PLAN_ITEMS_IMPORTED", "План/Прогноз", `${fileName}; строк: ${state.plan.items.length}`);
      } else if (kind === "openings") {
        state.plan.openings = parsePlanOpeningsCsv(text);
        state.plan.sourceFiles.openings = fileName;
        logChange("PLAN_OPENINGS_IMPORTED", "План/Прогноз", `${fileName}; строк: ${state.plan.openings.length}`);
      } else if (kind === "assumptions") {
        state.plan.assumptions = parsePlanAssumptionsCsv(text);
        state.plan.sourceFiles.assumptions = fileName;
        logChange("PLAN_ASSUMPTIONS_IMPORTED", "План/Прогноз", `${fileName}; строк: ${state.plan.assumptions.length}`);
      } else {
        return;
      }

      ensurePlanScenarioSelection();
      persistPlanAndRender(false);
    } catch (error) {
      alert(`Ошибка загрузки планового CSV: ${error.message}`);
    }
  };
  reader.onerror = () => {
    alert("Не удалось прочитать файл.");
  };
  reader.readAsText(file, "utf-8");
}

function clearPlanData() {
  if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут очищать плановые данные.")) return;
  const firstConfirm = window.confirm("Очистить все данные планирования?");
  if (!firstConfirm) return;
  const phrase = window.prompt("Для подтверждения введите: ОЧИСТИТЬ ПЛАН");
  if (phrase !== "ОЧИСТИТЬ ПЛАН") {
    alert("Очистка отменена: подтверждение не совпало.");
    return;
  }

  state.plan = createDefaultPlanState();
  state.planUi.editingIndex = -1;
  if (els.planItemsFile) els.planItemsFile.value = "";
  if (els.planOpeningsFile) els.planOpeningsFile.value = "";
  if (els.planAssumptionsFile) els.planAssumptionsFile.value = "";
  syncPlanItemFormDefaults();
  logChange("PLAN_CLEARED", "План/Прогноз", "Плановые CSV очищены");
  persistPlanAndRender(false);
}

function persistPlanAndRender(logSave = true) {
  savePlanState(state.plan);
  renderPlanTab();
  renderAnalyticsTab();
  if (logSave) {
    logChange("PLAN_UPDATED", "План/Прогноз", "Обновлены параметры прогноза");
  }
}

function renderPlanTab() {
  if (!els.planScenarioSelect || !els.planProbabilityFilter || !els.planMonthTableBody || !els.planActivityTableBody) return;
  if (!Number.isInteger(state.planUi.editingIndex) || state.planUi.editingIndex >= state.plan.items.length) {
    state.planUi.editingIndex = -1;
  }
  ensurePlanScenarioSelection();

  els.planScenarioSelect.innerHTML = getPlanScenarioOptions()
    .map((scenario) => `<option value="${escapeHtml(scenario)}">${escapeHtml(scenario)}</option>`)
    .join("");
  els.planScenarioSelect.value = state.plan.selectedScenario;
  els.planProbabilityFilter.value = state.plan.probabilityFilter;

  const itemsFile = state.plan.sourceFiles.items
    ? `${state.plan.sourceFiles.items}; строк: ${state.plan.items.length}`
    : state.plan.items.length > 0
      ? `ручной ввод; строк: ${state.plan.items.length}`
      : "не загружен.";
  const openingsFile = state.plan.sourceFiles.openings
    ? `${state.plan.sourceFiles.openings}; строк: ${state.plan.openings.length}`
    : "не загружен.";
  const assumptionsFile = state.plan.sourceFiles.assumptions
    ? `${state.plan.sourceFiles.assumptions}; строк: ${state.plan.assumptions.length}`
    : "не загружен.";

  if (els.planItemsStatus) els.planItemsStatus.textContent = `plan_items: ${itemsFile}`;
  if (els.planOpeningsStatus) els.planOpeningsStatus.textContent = `plan_opening_balance: ${openingsFile}`;
  if (els.planAssumptionsStatus) els.planAssumptionsStatus.textContent = `plan_assumptions: ${assumptionsFile}`;

  const forecast = buildPlanForecast(state.plan);
  const assumption = getAssumptionByScenario(state.plan.assumptions, state.plan.selectedScenario);
  if (els.planStatus) {
    els.planStatus.textContent =
      `Сценарий: ${state.plan.selectedScenario}. ` +
      `Коэфф. поступлений: ${assumption.inflowFactor.toFixed(2)}; ` +
      `коэфф. выбытий: ${assumption.outflowFactor.toFixed(2)}. ` +
      `Строк в расчете: ${forecast.includedItems}.`;
  }

  renderPlanItemEditor();
  renderPlanMetrics(forecast);
  renderPlanMonthTable(forecast.monthRows);
  renderPlanActivityTable(forecast.activityRows);
}

function renderObligationsTab() {
  if (!els.obligationTableBody || !els.obligationCalendarBody) return;

  const canManage = hasPermission("plan.manage");
  const preferredEntityId = Number(els.obligationLegalEntity?.value) || 0;
  const selectedEntityId = refreshObligationEntitySelect(preferredEntityId);
  refreshObligationAccountSelect(selectedEntityId, Number(els.obligationBankAccount?.value) || 0);
  fillObligationSettingsInputs();
  renderObligationFormState();
  renderObligationTable(canManage);
  renderObligationSuggestions(canManage);

  const horizonDays = normalizeIntInRange(state.obligations.settings.horizonDays, 30, 7, 90);
  const scheduleRows = buildObligationScheduleRows(state.obligations.items, horizonDays, new Date());
  renderObligationCalendar(scheduleRows, horizonDays);
}

function fillObligationSettingsInputs() {
  if (els.obligationHorizonDays) {
    els.obligationHorizonDays.value = String(normalizeIntInRange(state.obligations.settings.horizonDays, 30, 7, 90));
  }
  if (els.obligationLookbackMonths) {
    els.obligationLookbackMonths.value = String(normalizeIntInRange(state.obligations.settings.lookbackMonths, 6, 2, 24));
  }
  if (els.obligationMinRepeats) {
    els.obligationMinRepeats.value = String(normalizeIntInRange(state.obligations.settings.minRepeats, 2, 2, 12));
  }
  if (els.obligationMinAmount) {
    els.obligationMinAmount.value = formatNumberForInput(Number(state.obligations.settings.minAmount) || 300);
  }
  if (!els.obligationStartMonth?.value) {
    els.obligationStartMonth.value = getCurrentMonthKey();
  }
}

function onObligationFormSubmit(event) {
  event.preventDefault();
  if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут менять календарь платежей.")) return;

  try {
    const payload = buildObligationFromForm();
    const editId = Number(state.obligationsUi.editingId);
    const isEditing = Number.isFinite(editId) && editId > 0;
    if (isEditing) {
      state.obligations.items = state.obligations.items.map((item) => (item.id === editId ? { ...item, ...payload } : item));
      logChange("OBLIGATION_UPDATED", "Календарь платежей", `${payload.name}; ${formatMoney(payload.amount)}`);
    } else {
      state.obligations.items.push({
        id: getNextId(state.obligations.items),
        source: "manual",
        createdAt: new Date().toISOString(),
        ...payload,
      });
      logChange("OBLIGATION_ADDED", "Календарь платежей", `${payload.name}; ${formatMoney(payload.amount)}`);
    }

    state.obligations.items = sortObligations(state.obligations.items);
    saveObligationsState(state.obligations);
    clearObligationForm();
    renderObligationsTab();
  } catch (error) {
    alert(error.message || "Не удалось сохранить обязательство.");
  }
}

function buildObligationFromForm() {
  const name = String(els.obligationName?.value || "").trim();
  if (!name) throw new Error("Введите название обязательного платежа.");

  const category = normalizeObligationCategory(els.obligationCategory?.value || "other");
  const legalEntityId = Number(els.obligationLegalEntity?.value) || 0;
  if (!legalEntityId) throw new Error("Выберите юрлицо.");
  const bankAccountId = Number(els.obligationBankAccount?.value) || 0;
  if (!bankAccountId) throw new Error("Выберите банковский счет.");
  const amount = parseAmount(String(els.obligationAmount?.value || ""));
  if (!Number.isFinite(amount) || amount <= 0) throw new Error("Сумма должна быть больше 0.");

  const dayOfMonth = normalizeIntInRange(els.obligationDay?.value, 10, 1, 31);
  const startMonth = normalizeMonthKey(els.obligationStartMonth?.value || "");
  if (!startMonth) throw new Error("Укажите месяц начала действия.");
  const endMonth = normalizeMonthKey(els.obligationEndMonth?.value || "");
  if (endMonth && endMonth < startMonth) throw new Error("Месяц окончания не может быть раньше месяца начала.");

  return {
    name,
    category,
    legalEntityId,
    bankAccountId,
    counterparty: String(els.obligationCounterparty?.value || "").trim(),
    amount: Math.abs(amount),
    dayOfMonth,
    startMonth,
    endMonth,
    active: Boolean(els.obligationActive?.checked),
    comment: String(els.obligationComment?.value || "").trim(),
  };
}

function clearObligationForm() {
  state.obligationsUi.editingId = 0;
  if (els.obligationId) els.obligationId.value = "";
  if (els.obligationName) els.obligationName.value = "";
  if (els.obligationCategory) els.obligationCategory.value = "tax";
  const selectedEntityId = refreshObligationEntitySelect(0);
  refreshObligationAccountSelect(selectedEntityId, 0);
  if (els.obligationCounterparty) els.obligationCounterparty.value = "";
  if (els.obligationAmount) els.obligationAmount.value = "";
  if (els.obligationDay) els.obligationDay.value = "10";
  if (els.obligationStartMonth) els.obligationStartMonth.value = getCurrentMonthKey();
  if (els.obligationEndMonth) els.obligationEndMonth.value = "";
  if (els.obligationComment) els.obligationComment.value = "";
  if (els.obligationActive) els.obligationActive.checked = true;
  renderObligationFormState();
}

function cancelObligationEdit() {
  clearObligationForm();
  renderObligationsTab();
}

function startObligationEdit(id) {
  const item = state.obligations.items.find((row) => row.id === id);
  if (!item) return;
  state.obligationsUi.editingId = id;
  if (els.obligationId) els.obligationId.value = String(id);
  if (els.obligationName) els.obligationName.value = item.name || "";
  if (els.obligationCategory) els.obligationCategory.value = normalizeObligationCategory(item.category);
  const selectedEntityId = refreshObligationEntitySelect(Number(item.legalEntityId) || 0);
  refreshObligationAccountSelect(selectedEntityId, Number(item.bankAccountId) || 0);
  if (els.obligationCounterparty) els.obligationCounterparty.value = item.counterparty || "";
  if (els.obligationAmount) els.obligationAmount.value = formatNumberForInput(item.amount);
  if (els.obligationDay) els.obligationDay.value = String(normalizeIntInRange(item.dayOfMonth, 10, 1, 31));
  if (els.obligationStartMonth) els.obligationStartMonth.value = item.startMonth || getCurrentMonthKey();
  if (els.obligationEndMonth) els.obligationEndMonth.value = item.endMonth || "";
  if (els.obligationComment) els.obligationComment.value = item.comment || "";
  if (els.obligationActive) els.obligationActive.checked = Boolean(item.active);
  renderObligationFormState();
}

function deleteObligation(id) {
  const item = state.obligations.items.find((row) => row.id === id);
  if (!item) return;
  const confirmed = window.confirm(`Удалить обязательство "${item.name}"?`);
  if (!confirmed) return;
  state.obligations.items = state.obligations.items.filter((row) => row.id !== id);
  if (Number(state.obligationsUi.editingId) === id) {
    clearObligationForm();
  }
  saveObligationsState(state.obligations);
  logChange("OBLIGATION_DELETED", "Календарь платежей", item.name);
  renderObligationsTab();
}

function toggleObligationActive(id) {
  const item = state.obligations.items.find((row) => row.id === id);
  if (!item) return;
  state.obligations.items = state.obligations.items.map((row) =>
    row.id === id ? { ...row, active: !row.active } : row
  );
  saveObligationsState(state.obligations);
  logChange("OBLIGATION_STATUS_CHANGED", "Календарь платежей", `${item.name}: ${item.active ? "неактивен" : "активен"}`);
  renderObligationsTab();
}

function renderObligationFormState() {
  if (!els.obligationFormStatus || !els.obligationSaveBtn || !els.obligationCancelBtn) return;
  const editId = Number(state.obligationsUi.editingId);
  const item = state.obligations.items.find((row) => row.id === editId);
  if (!item) {
    els.obligationFormStatus.textContent = "Режим: добавление.";
    els.obligationSaveBtn.textContent = "Сохранить обязательство";
    return;
  }
  els.obligationFormStatus.textContent = `Режим: редактирование "${item.name}".`;
  els.obligationSaveBtn.textContent = "Сохранить изменения";
}

function renderObligationTable(canManage) {
  const rows = sortObligations(state.obligations.items || []);
  if (!rows.length) {
    els.obligationTableBody.innerHTML = `<tr><td colspan="12" class="empty">Обязательные платежи еще не добавлены.</td></tr>`;
    return;
  }

  els.obligationTableBody.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${escapeHtml(row.name)}</td>
        <td><span class="obligation-badge ${escapeHtml(row.category)}">${escapeHtml(obligationCategoryLabel(row.category))}</span></td>
        <td>${escapeHtml(getLegalEntityNameById(row.legalEntityId))}</td>
        <td>${escapeHtml(getBankAccountNameById(row.bankAccountId))}</td>
        <td>${escapeHtml(row.counterparty || "—")}</td>
        <td>${formatMoney(row.amount)}</td>
        <td>${row.dayOfMonth}</td>
        <td>${escapeHtml(row.startMonth || "—")}</td>
        <td>${escapeHtml(row.endMonth || "—")}</td>
        <td>${row.active ? "Активен" : "Пауза"}</td>
        <td>${row.source === "suggested" ? "Подсказка" : "Ручной"}</td>
        <td>
          ${
            canManage
              ? `
            <button type="button" class="inline-link" data-obligation-action="edit" data-obligation-id="${row.id}">Редактировать</button>
            <button type="button" class="inline-link" data-obligation-action="toggle-active" data-obligation-id="${row.id}">${
              row.active ? "Пауза" : "Включить"
            }</button>
            <button type="button" class="inline-link danger" data-obligation-action="delete" data-obligation-id="${row.id}">Удалить</button>
          `
              : "—"
          }
        </td>
      </tr>
    `
    )
    .join("");
}

function buildObligationScheduleRows(items, horizonDays, startDate = new Date()) {
  const from = startOfDay(startDate);
  const to = endOfDay(addDays(from, Math.max(1, horizonDays)));
  const rows = [];

  (items || [])
    .filter((item) => item.active)
    .forEach((item) => {
      const startMonth = normalizeMonthKey(item.startMonth) || toMonthKey(from);
      const endMonth = normalizeMonthKey(item.endMonth);
      let cursor = new Date(from.getFullYear(), from.getMonth(), 1);
      const endCursor = new Date(to.getFullYear(), to.getMonth(), 1);

      while (cursor <= endCursor) {
        const monthKey = toMonthKey(cursor);
        if (monthKey < startMonth) {
          cursor = addMonths(cursor, 1);
          continue;
        }
        if (endMonth && monthKey > endMonth) {
          break;
        }

        const dueDate = buildDueDateForMonth(monthKey, item.dayOfMonth);
        if (dueDate && dueDate >= from && dueDate <= to) {
          rows.push({
            obligationId: item.id,
            dateObj: dueDate,
            month: monthKey,
            name: item.name,
            category: item.category,
            legalEntityName: getLegalEntityNameById(item.legalEntityId),
            bankAccountName: getBankAccountNameById(item.bankAccountId),
            counterparty: item.counterparty,
            amount: item.amount,
          });
        }
        cursor = addMonths(cursor, 1);
      }
    });

  return rows.sort((a, b) => {
    const byDate = a.dateObj.getTime() - b.dateObj.getTime();
    if (byDate !== 0) return byDate;
    return b.amount - a.amount;
  });
}

function buildDueDateForMonth(monthKey, dayOfMonth) {
  const normalizedMonth = normalizeMonthKey(monthKey);
  if (!normalizedMonth) return null;
  const baseDate = parseFlexibleDate(`${normalizedMonth}-01`);
  if (!baseDate) return null;
  const lastDay = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0).getDate();
  const safeDay = Math.min(lastDay, Math.max(1, normalizeIntInRange(dayOfMonth, 10, 1, 31)));
  return new Date(baseDate.getFullYear(), baseDate.getMonth(), safeDay);
}

function renderObligationCalendar(rows, horizonDays) {
  if (!rows.length) {
    els.obligationCalendarBody.innerHTML = `<tr><td colspan="8" class="empty">На горизонте ${horizonDays} дней обязательных платежей нет.</td></tr>`;
    renderObligationMetrics(rows, horizonDays);
    return;
  }

  els.obligationCalendarBody.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${escapeHtml(toDateInputValue(row.dateObj))}</td>
        <td>${escapeHtml(row.month)}</td>
        <td>${escapeHtml(row.name)}</td>
        <td><span class="obligation-badge ${escapeHtml(row.category)}">${escapeHtml(obligationCategoryLabel(row.category))}</span></td>
        <td>${escapeHtml(row.legalEntityName || "—")}</td>
        <td>${escapeHtml(row.bankAccountName || "—")}</td>
        <td>${escapeHtml(row.counterparty || "—")}</td>
        <td>${formatMoney(row.amount)}</td>
      </tr>
    `
    )
    .join("");

  renderObligationMetrics(rows, horizonDays);
}

function renderObligationMetrics(rows, horizonDays) {
  if (!els.obligationMetrics) return;
  const activeCount = (state.obligations.items || []).filter((row) => row.active).length;
  const horizonTotal = rows.reduce((sum, row) => sum + row.amount, 0);
  const monthKey = getCurrentMonthKey();
  const thisMonthTotal = rows.filter((row) => row.month === monthKey).reduce((sum, row) => sum + row.amount, 0);
  const nearestDate = rows[0]?.dateObj || null;
  const metrics = [
    { label: "Активных обязательств", value: String(activeCount) },
    { label: `Сумма на ${horizonDays} дней`, value: formatMoney(horizonTotal) },
    { label: "Сумма текущего месяца", value: formatMoney(thisMonthTotal) },
    { label: "Ближайший платеж", value: nearestDate ? toDateInputValue(nearestDate) : "н/д" },
  ];
  els.obligationMetrics.innerHTML = metrics
    .map(
      (item) => `
      <article class="metric">
        <div class="label">${escapeHtml(item.label)}</div>
        <div class="value">${escapeHtml(item.value)}</div>
      </article>
    `
    )
    .join("");
}

function analyzeObligationSuggestions() {
  if (!requirePermission("plan.manage", "Недостаточно прав: только Админ или Оператор могут строить подсказки календаря.")) return;
  const lookbackMonths = normalizeIntInRange(els.obligationLookbackMonths?.value, 6, 2, 24);
  const minRepeats = normalizeIntInRange(els.obligationMinRepeats?.value, 2, 2, 12);
  const minAmount = Math.max(0, parseAmount(String(els.obligationMinAmount?.value || "")) || 0);

  state.obligations.settings.lookbackMonths = lookbackMonths;
  state.obligations.settings.minRepeats = minRepeats;
  state.obligations.settings.minAmount = minAmount;
  saveObligationsState(state.obligations);

  const ops = getOperationsForReconcile();
  if (!ops.length) {
    state.obligationsUi.suggestions = [];
    if (els.obligationSuggestStatus) {
      els.obligationSuggestStatus.textContent = "Нет операций ДДС для анализа. Сначала загрузите CSV на вкладке отчета.";
    }
    renderObligationsTab();
    return;
  }

  const suggestions = buildObligationSuggestionsFromHistory(ops, state.obligations.settings, state.obligations.items);
  state.obligationsUi.suggestions = suggestions;
  if (els.obligationSuggestStatus) {
    els.obligationSuggestStatus.textContent =
      suggestions.length > 0
        ? `Найдено подсказок: ${suggestions.length}. Подтвердите нужные.`
        : "Подсказки не найдены по текущим параметрам.";
  }
  renderObligationsTab();
}

function buildObligationSuggestionsFromHistory(operations, settings, existingItems = []) {
  const lookbackMonths = normalizeIntInRange(settings.lookbackMonths, 6, 2, 24);
  const minRepeats = normalizeIntInRange(settings.minRepeats, 2, 2, 12);
  const minAmount = Number(settings.minAmount) || 0;
  const latestDate = operations
    .map((op) => op.dateObj)
    .filter((date) => date instanceof Date && !Number.isNaN(date.getTime()))
    .sort((a, b) => b.getTime() - a.getTime())[0];
  if (!latestDate) return [];

  const windowStart = startOfDay(addMonths(latestDate, -(lookbackMonths - 1)));
  const grouped = new Map();

  operations
    .filter((op) => op.direction === "Выбытие" && op.dateObj >= windowStart)
    .forEach((op) => {
      const counterpartyKey = normalizeText(op.counterparty || "");
      const articleKey = normalizeText(op.article || op.articleInput || "");
      const baseKey = counterpartyKey || articleKey;
      if (!baseKey) return;

      const key = counterpartyKey ? `cp:${counterpartyKey}` : `ar:${articleKey}`;
      if (!grouped.has(key)) {
        grouped.set(key, {
          key,
          counterparty: String(op.counterparty || "").trim(),
          article: String(op.article || op.articleInput || "").trim(),
          amounts: [],
          dates: [],
          monthSet: new Set(),
          rawComments: [],
        });
      }

      const bucket = grouped.get(key);
      bucket.amounts.push(Math.abs(Number(op.amount) || 0));
      bucket.dates.push(op.dateObj);
      bucket.monthSet.add(toMonthKey(op.dateObj));
      if (op.comment) bucket.rawComments.push(String(op.comment));
    });

  const suggestions = [];
  grouped.forEach((bucket) => {
    const repeats = bucket.monthSet.size;
    if (repeats < minRepeats) return;
    const avgAmount = bucket.amounts.reduce((sum, val) => sum + val, 0) / bucket.amounts.length;
    if (!Number.isFinite(avgAmount) || avgAmount < minAmount) return;
    const recommendedDay = detectModeDay(bucket.dates);
    const textSource = `${bucket.counterparty} ${bucket.article} ${bucket.rawComments.join(" ")}`.trim();
    const category = guessObligationCategory(textSource);
    const name = buildObligationName(category, bucket.counterparty, bucket.article);

    if (hasExistingObligationCandidate(existingItems, bucket.counterparty, bucket.article, recommendedDay)) return;

    suggestions.push({
      id: suggestions.length + 1,
      name,
      category,
      counterparty: bucket.counterparty || bucket.article || "Без контрагента",
      article: bucket.article,
      amount: avgAmount,
      dayOfMonth: recommendedDay,
      repeats,
      sampleCount: bucket.amounts.length,
    });
  });

  return suggestions.sort((a, b) => {
    if (b.repeats !== a.repeats) return b.repeats - a.repeats;
    return b.amount - a.amount;
  });
}

function renderObligationSuggestions(canManage) {
  const suggestions = state.obligationsUi.suggestions || [];
  if (!suggestions.length) {
    els.obligationSuggestBody.innerHTML = `<tr><td colspan="7" class="empty">Подсказок пока нет.</td></tr>`;
    return;
  }

  els.obligationSuggestBody.innerHTML = suggestions
    .map(
      (row) => `
      <tr>
        <td>${escapeHtml(row.name)}</td>
        <td><span class="obligation-badge ${escapeHtml(row.category)}">${escapeHtml(obligationCategoryLabel(row.category))}</span></td>
        <td>${escapeHtml(row.counterparty || row.article || "—")}</td>
        <td>${formatMoney(row.amount)}</td>
        <td>${row.dayOfMonth}</td>
        <td>${row.repeats} мес. (${row.sampleCount} оп.)</td>
        <td>
          ${
            canManage
              ? `<button type="button" class="secondary" data-obligation-suggest-action="accept" data-suggest-id="${row.id}">Добавить</button>`
              : "—"
          }
        </td>
      </tr>
    `
    )
    .join("");
}

function acceptObligationSuggestion(suggestId) {
  const suggestion = (state.obligationsUi.suggestions || []).find((row) => row.id === suggestId);
  if (!suggestion) return;
  const legalEntityId = Number(els.obligationLegalEntity?.value) || 0;
  const bankAccountId = Number(els.obligationBankAccount?.value) || 0;
  if (!legalEntityId || !bankAccountId) {
    alert("Сначала выберите юрлицо и банковский счет в форме обязательства.");
    return;
  }
  state.obligations.items.push({
    id: getNextId(state.obligations.items),
    name: suggestion.name,
    category: suggestion.category,
    legalEntityId,
    bankAccountId,
    counterparty: suggestion.counterparty || "",
    amount: suggestion.amount,
    dayOfMonth: suggestion.dayOfMonth,
    startMonth: getCurrentMonthKey(),
    endMonth: "",
    active: true,
    comment: "Добавлено из автоподсказки по истории",
    source: "suggested",
    createdAt: new Date().toISOString(),
  });
  state.obligations.items = sortObligations(state.obligations.items);
  state.obligationsUi.suggestions = state.obligationsUi.suggestions.filter((row) => row.id !== suggestId);
  saveObligationsState(state.obligations);
  logChange("OBLIGATION_ACCEPTED", "Календарь платежей", `${suggestion.name}; ${formatMoney(suggestion.amount)}`);
  renderObligationsTab();
}

function detectModeDay(dates) {
  const counts = new Map();
  (dates || []).forEach((dateObj) => {
    const day = Number(dateObj?.getDate?.() || 0);
    if (!day) return;
    counts.set(day, (counts.get(day) || 0) + 1);
  });
  if (!counts.size) return 10;
  return [...counts.entries()].sort((a, b) => (b[1] !== a[1] ? b[1] - a[1] : a[0] - b[0]))[0][0];
}

function buildObligationName(category, counterparty, article) {
  const party = String(counterparty || "").trim();
  const art = String(article || "").trim();
  if (party) return party;
  if (art) return `${obligationCategoryLabel(category)}: ${art}`;
  return `${obligationCategoryLabel(category)} (регулярный платеж)`;
}

function hasExistingObligationCandidate(items, counterparty, article, dayOfMonth) {
  const cpKey = normalizeText(counterparty || "");
  const articleKey = normalizeText(article || "");
  return (items || []).some((item) => {
    const itemCp = normalizeText(item.counterparty || "");
    const itemName = normalizeText(item.name || "");
    const dayDiff = Math.abs((Number(item.dayOfMonth) || 0) - (Number(dayOfMonth) || 0));
    const sameEntity = (cpKey && (itemCp === cpKey || itemName.includes(cpKey))) || (articleKey && itemName.includes(articleKey));
    return sameEntity && dayDiff <= 2;
  });
}

function guessObligationCategory(text) {
  const source = normalizeText(text || "");
  if (!source) return "other";
  if (
    source.includes("finanzamt") ||
    source.includes("steuer") ||
    source.includes("tax") ||
    source.includes("ust") ||
    source.includes("vat")
  ) {
    return "tax";
  }
  if (
    source.includes("lohn") ||
    source.includes("salary") ||
    source.includes("gehalt") ||
    source.includes("fot") ||
    source.includes("payroll")
  ) {
    return "salary";
  }
  if (source.includes("miete") || source.includes("rent") || source.includes("арен")) {
    return "rent";
  }
  if (source.includes("kredit") || source.includes("loan") || source.includes("leasing") || source.includes("лизинг")) {
    return "credit";
  }
  return "other";
}

function obligationCategoryLabel(category) {
  return OBLIGATION_CATEGORY_LABELS[normalizeObligationCategory(category)] || OBLIGATION_CATEGORY_LABELS.other;
}

function normalizeObligationCategory(value) {
  const normalized = String(value || "other").trim().toLowerCase();
  return OBLIGATION_CATEGORY_LABELS[normalized] ? normalized : "other";
}

function sortObligations(items) {
  return [...(items || [])].sort((a, b) => {
    const byActive = Number(Boolean(b.active)) - Number(Boolean(a.active));
    if (byActive !== 0) return byActive;
    const byStart = String(a.startMonth || "").localeCompare(String(b.startMonth || ""));
    if (byStart !== 0) return byStart;
    const byDay = (Number(a.dayOfMonth) || 0) - (Number(b.dayOfMonth) || 0);
    if (byDay !== 0) return byDay;
    return String(a.name || "").localeCompare(String(b.name || ""), "ru");
  });
}

function renderPlanItemEditor() {
  renderPlanItemFormState();
  renderPlanItemsTable();
}

function renderPlanItemFormState() {
  if (!els.planItemFormStatus || !els.planItemSubmitBtn || !els.planItemCancelBtn) return;
  const editIndex = Number(state.planUi.editingIndex);
  const isEditing = Number.isInteger(editIndex) && editIndex >= 0 && editIndex < state.plan.items.length;
  if (!isEditing) {
    if (!els.planItemMonth?.value) {
      syncPlanItemFormDefaults();
    }
    els.planItemFormStatus.textContent = "Режим: добавление.";
    els.planItemSubmitBtn.textContent = "Сохранить строку";
    return;
  }

  const item = state.plan.items[editIndex];
  els.planItemFormStatus.textContent = `Режим: редактирование строки ${editIndex + 1} (${item.month}; ${item.type}).`;
  els.planItemSubmitBtn.textContent = "Сохранить изменения";
}

function renderPlanItemsTable() {
  if (!els.planItemsTableBody) return;
  if (!state.plan.items || state.plan.items.length === 0) {
    els.planItemsTableBody.innerHTML = `<tr><td colspan="12" class="empty">Строки plan_items пока не добавлены.</td></tr>`;
    return;
  }

  const canManage = hasPermission("plan.manage");
  els.planItemsTableBody.innerHTML = state.plan.items
    .map(
      (row, index) => `
      <tr>
        <td>${escapeHtml(row.month)}</td>
        <td>${row.date ? escapeHtml(row.date) : "н/д"}</td>
        <td>${escapeHtml(row.type)}</td>
        <td>${formatMoney(row.amount)}</td>
        <td>${escapeHtml(row.activity || "")}</td>
        <td>${escapeHtml(row.ddsArticle || "")}</td>
        <td>${escapeHtml(row.legalEntity || "")}</td>
        <td>${escapeHtml(row.bankAccount || "")}</td>
        <td>${escapeHtml(row.probability || "")}</td>
        <td>${escapeHtml(row.scenario || "")}</td>
        <td>${escapeHtml(row.comment || "")}</td>
        <td>
          ${
            canManage
              ? `
            <button type="button" class="inline-link" data-plan-item-action="edit" data-plan-item-index="${index}">Редактировать</button>
            <button type="button" class="inline-link danger" data-plan-item-action="delete" data-plan-item-index="${index}">Удалить</button>
          `
              : "—"
          }
        </td>
      </tr>
    `
    )
    .join("");
}

function renderPlanMetrics(forecast) {
  if (!els.planMetrics) return;
  const metrics = [
    { label: "Месяцев в прогнозе", value: String(forecast.monthRows.length) },
    { label: "Поступления (план)", value: formatMoney(forecast.totalInflow) },
    { label: "Выбытия (план)", value: formatMoney(forecast.totalOutflow) },
    { label: "Чистый поток", value: formatMoney(forecast.totalNet) },
    { label: "Месяцев с риском", value: String(forecast.riskMonths) },
  ];

  els.planMetrics.innerHTML = metrics
    .map(
      (item) => `
      <article class="metric">
        <div class="label">${item.label}</div>
        <div class="value">${item.value}</div>
      </article>
    `
    )
    .join("");
}

function renderPlanMonthTable(rows) {
  if (!els.planMonthTableBody) return;
  if (!rows || rows.length === 0) {
    els.planMonthTableBody.innerHTML = `<tr><td colspan="7" class="empty">Нет данных для расчета прогноза.</td></tr>`;
    return;
  }

  els.planMonthTableBody.innerHTML = rows
    .map((row) => {
      const riskLabel = row.risk ? "Риск кассового разрыва" : "ОК";
      return `
        <tr class="${row.risk ? "unresolved-row" : ""}">
          <td>${escapeHtml(row.month)}</td>
          <td>${row.openingBalance === null ? "н/д" : formatMoney(row.openingBalance)}</td>
          <td>${formatMoney(row.inflow)}</td>
          <td>${formatMoney(row.outflow)}</td>
          <td>${formatMoney(row.net)}</td>
          <td>${row.closingBalance === null ? "н/д" : formatMoney(row.closingBalance)}</td>
          <td>${riskLabel}</td>
        </tr>
      `;
    })
    .join("");
}

function renderPlanActivityTable(rows) {
  if (!els.planActivityTableBody) return;
  if (!rows || rows.length === 0) {
    els.planActivityTableBody.innerHTML = `<tr><td colspan="4" class="empty">Нет данных по видам деятельности.</td></tr>`;
    return;
  }

  const body = rows
    .map(
      (row) => `
      <tr>
        <td>${escapeHtml(row.activity)}</td>
        <td>${formatMoney(row.inflow)}</td>
        <td>${formatMoney(row.outflow)}</td>
        <td>${formatMoney(row.net)}</td>
      </tr>
    `
    )
    .join("");

  const totalInflow = rows.reduce((sum, row) => sum + row.inflow, 0);
  const totalOutflow = rows.reduce((sum, row) => sum + row.outflow, 0);
  const totalNet = totalInflow - totalOutflow;
  els.planActivityTableBody.innerHTML =
    body +
    `
    <tr class="grand-total">
      <td>Итого</td>
      <td>${formatMoney(totalInflow)}</td>
      <td>${formatMoney(totalOutflow)}</td>
      <td>${formatMoney(totalNet)}</td>
    </tr>
  `;
}

function buildPlanForecast(planState) {
  const assumption = getAssumptionByScenario(planState.assumptions, planState.selectedScenario);
  const includedItems = getPlanItemsForScenario(planState.items, planState.selectedScenario, planState.probabilityFilter);
  const inflowFactor = Number(assumption.inflowFactor) || 1;
  const outflowFactor = Number(assumption.outflowFactor) || 1;

  const monthMap = new Map();
  const activityMap = new Map();

  includedItems.forEach((item) => {
    const month = normalizeMonthKey(item.month || item.date);
    if (!month) return;

    if (!monthMap.has(month)) {
      monthMap.set(month, {
        month,
        openingBalance: null,
        inflow: 0,
        outflow: 0,
        net: 0,
        closingBalance: null,
        risk: false,
      });
    }
    const row = monthMap.get(month);
    const isOutflow = normalizeText(item.type).includes("выбыт") || normalizeText(item.type).includes("расход");
    const adjustedAmount = Math.abs(Number(item.amount) || 0) * (isOutflow ? outflowFactor : inflowFactor);
    if (isOutflow) {
      row.outflow += adjustedAmount;
    } else {
      row.inflow += adjustedAmount;
    }

    const activity = String(item.activity || "Не определено").trim() || "Не определено";
    if (!activityMap.has(activity)) {
      activityMap.set(activity, { activity, inflow: 0, outflow: 0, net: 0 });
    }
    const activityRow = activityMap.get(activity);
    if (isOutflow) {
      activityRow.outflow += adjustedAmount;
    } else {
      activityRow.inflow += adjustedAmount;
    }
  });

  const openingByMonth = new Map();
  (planState.openings || []).forEach((row) => {
    const month = normalizeMonthKey(row.month);
    const openingBalance = Number(row.openingBalance);
    if (!month || !Number.isFinite(openingBalance)) return;
    openingByMonth.set(month, (openingByMonth.get(month) || 0) + openingBalance);
    if (!monthMap.has(month)) {
      monthMap.set(month, {
        month,
        openingBalance: null,
        inflow: 0,
        outflow: 0,
        net: 0,
        closingBalance: null,
        risk: false,
      });
    }
  });

  const monthRows = [...monthMap.values()].sort((a, b) => a.month.localeCompare(b.month));
  let previousClosing = null;
  monthRows.forEach((row) => {
    const explicitOpening = openingByMonth.has(row.month) ? openingByMonth.get(row.month) : null;
    row.openingBalance = Number.isFinite(explicitOpening) ? explicitOpening : previousClosing;
    row.net = row.inflow - row.outflow;
    row.closingBalance = Number.isFinite(row.openingBalance) ? row.openingBalance + row.net : null;
    row.risk = Number.isFinite(row.closingBalance) ? row.closingBalance < 0 : false;
    previousClosing = Number.isFinite(row.closingBalance) ? row.closingBalance : previousClosing;
  });

  const activityRows = [...activityMap.values()]
    .map((row) => ({ ...row, net: row.inflow - row.outflow }))
    .sort((a, b) => a.activity.localeCompare(b.activity, "ru"));

  const totalInflow = monthRows.reduce((sum, row) => sum + row.inflow, 0);
  const totalOutflow = monthRows.reduce((sum, row) => sum + row.outflow, 0);
  const totalNet = totalInflow - totalOutflow;
  const riskMonths = monthRows.filter((row) => row.risk).length;

  return {
    monthRows,
    activityRows,
    totalInflow,
    totalOutflow,
    totalNet,
    riskMonths,
    includedItems: includedItems.length,
  };
}

function getPlanItemsForScenario(items, selectedScenario, probabilityFilter) {
  const scenarioKey = normalizePlanScenario(selectedScenario);
  return (items || []).filter((item) => {
    const itemScenario = normalizePlanScenario(item.scenario || "base");
    if (itemScenario && itemScenario !== scenarioKey) return false;
    if (probabilityFilter === "high") {
      return item.probability === "high";
    }
    if (probabilityFilter === "medium-high") {
      return item.probability === "high" || item.probability === "medium";
    }
    return true;
  });
}

function getPlanScenarioOptions() {
  const fromAssumptions = (state.plan.assumptions || []).map((row) => normalizePlanScenario(row.scenario));
  const fromItems = (state.plan.items || []).map((row) => normalizePlanScenario(row.scenario));
  const combined = uniqueValues([...fromAssumptions, ...fromItems, "base"].filter(Boolean));
  return combined.length > 0 ? combined : ["base"];
}

function ensurePlanScenarioSelection() {
  const options = getPlanScenarioOptions();
  const current = normalizePlanScenario(state.plan.selectedScenario);
  state.plan.selectedScenario = options.includes(current) ? current : options[0];
  const probability = String(state.plan.probabilityFilter || "all");
  state.plan.probabilityFilter = ["all", "high", "medium-high"].includes(probability) ? probability : "all";
}

function getAssumptionByScenario(assumptions, scenario) {
  const normalizedScenario = normalizePlanScenario(scenario);
  const row = (assumptions || []).find((item) => normalizePlanScenario(item.scenario) === normalizedScenario);
  if (row) {
    return {
      scenario: normalizePlanScenario(row.scenario),
      inflowFactor: Number.isFinite(Number(row.inflowFactor)) ? Number(row.inflowFactor) : 1,
      outflowFactor: Number.isFinite(Number(row.outflowFactor)) ? Number(row.outflowFactor) : 1,
    };
  }
  return { scenario: normalizedScenario || "base", inflowFactor: 1, outflowFactor: 1 };
}

function parsePlanItemsCsv(text) {
  const { rows, headerMap } = parsePlanCsvTable(text, {
    month: ["month", "месяц"],
    date: ["date", "дата"],
    legalEntity: ["legal_entity", "юрлицо", "компания"],
    bankAccount: ["bank_account", "счет", "банк"],
    activity: ["activity", "вид деятельности"],
    ddsArticle: ["dds_article", "article", "статья ддс", "статья"],
    type: ["type", "группа", "операция"],
    amount: ["amount", "сумма"],
    probability: ["probability", "вероятность"],
    scenario: ["scenario", "сценарий"],
    comment: ["comment", "комментарий"],
  }, ["type", "amount"]);

  const parsed = rows
    .map((cells) => {
      const monthRaw = getCellByHeader(cells, headerMap, "month");
      const dateRaw = getCellByHeader(cells, headerMap, "date");
      const month = normalizeMonthKey(monthRaw || dateRaw);
      const dateObj = parseFlexibleDate(dateRaw);
      const type = resolvePlanType(getCellByHeader(cells, headerMap, "type"), getCellByHeader(cells, headerMap, "amount"));
      const amount = parseAmount(getCellByHeader(cells, headerMap, "amount"));
      if (!month || !Number.isFinite(amount)) return null;

      return {
        month,
        date: dateObj ? toDateInputValue(dateObj) : "",
        legalEntity: String(getCellByHeader(cells, headerMap, "legalEntity") || "").trim(),
        bankAccount: String(getCellByHeader(cells, headerMap, "bankAccount") || "").trim(),
        activity: String(getCellByHeader(cells, headerMap, "activity") || "").trim() || "Не определено",
        ddsArticle: String(getCellByHeader(cells, headerMap, "ddsArticle") || "").trim(),
        type,
        amount: Math.abs(amount),
        probability: normalizePlanProbability(getCellByHeader(cells, headerMap, "probability")),
        scenario: normalizePlanScenario(getCellByHeader(cells, headerMap, "scenario") || "base"),
        comment: String(getCellByHeader(cells, headerMap, "comment") || "").trim(),
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const byMonth = a.month.localeCompare(b.month);
      if (byMonth !== 0) return byMonth;
      return String(a.date || "").localeCompare(String(b.date || ""));
    });

  if (parsed.length === 0) {
    throw new Error("В `plan_items` не найдены валидные строки (month/type/amount).");
  }
  return parsed;
}

function parsePlanOpeningsCsv(text) {
  const { rows, headerMap } = parsePlanCsvTable(text, {
    month: ["month", "месяц"],
    legalEntity: ["legal_entity", "юрлицо", "компания"],
    bankAccount: ["bank_account", "счет", "банк"],
    openingBalance: ["opening_balance", "начало", "остаток на начало", "balance_start"],
  }, ["month", "openingBalance"]);

  const parsed = rows
    .map((cells) => {
      const month = normalizeMonthKey(getCellByHeader(cells, headerMap, "month"));
      const openingBalance = parseAmount(getCellByHeader(cells, headerMap, "openingBalance"));
      if (!month || !Number.isFinite(openingBalance)) return null;
      return {
        month,
        legalEntity: String(getCellByHeader(cells, headerMap, "legalEntity") || "").trim(),
        bankAccount: String(getCellByHeader(cells, headerMap, "bankAccount") || "").trim(),
        openingBalance,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.month.localeCompare(b.month));

  if (parsed.length === 0) {
    throw new Error("В `plan_opening_balance` не найдены валидные строки (month/opening_balance).");
  }
  return parsed;
}

function parsePlanAssumptionsCsv(text) {
  const { rows, headerMap } = parsePlanCsvTable(text, {
    scenario: ["scenario", "сценарий"],
    inflowFactor: ["inflow_factor", "коэф поступлений", "коэффициент поступлений", "inflow"],
    outflowFactor: ["outflow_factor", "коэф выбытий", "коэффициент выбытий", "outflow"],
  }, ["scenario", "inflowFactor", "outflowFactor"]);

  const byScenario = new Map();
  rows.forEach((cells) => {
    const scenario = normalizePlanScenario(getCellByHeader(cells, headerMap, "scenario") || "base");
    const inflowFactor = parseAmount(getCellByHeader(cells, headerMap, "inflowFactor"));
    const outflowFactor = parseAmount(getCellByHeader(cells, headerMap, "outflowFactor"));
    if (!scenario || !Number.isFinite(inflowFactor) || !Number.isFinite(outflowFactor)) return;
    byScenario.set(scenario, {
      scenario,
      inflowFactor,
      outflowFactor,
    });
  });

  const parsed = [...byScenario.values()].sort((a, b) => a.scenario.localeCompare(b.scenario, "ru"));
  if (parsed.length === 0) {
    throw new Error("В `plan_assumptions` не найдены валидные строки (scenario/inflow_factor/outflow_factor).");
  }
  return parsed;
}

function parsePlanCsvTable(text, columnsConfig, requiredKeys = []) {
  const clean = String(text || "").replace(/^\uFEFF/, "").trim();
  if (!clean) throw new Error("CSV пустой.");
  const delimiter = detectCsvDelimiter(clean);
  const rows = parseCsv(clean, delimiter).filter((cells) => cells.some((cell) => String(cell || "").trim() !== ""));
  if (rows.length < 2) throw new Error("В CSV нет строк данных.");

  const headers = (rows[0] || []).map((cell) => normalizeText(cell).replace(/[_\s]+/g, " ").trim());
  const headerMap = {};
  Object.entries(columnsConfig).forEach(([key, aliases]) => {
    const index = findColumnByAliases(headers, aliases || []);
    if (index >= 0) {
      headerMap[key] = index;
    }
  });

  const missing = requiredKeys.filter((key) => !Number.isInteger(headerMap[key]));
  if (missing.length > 0) {
    throw new Error(`Не найдены обязательные колонки: ${missing.join(", ")}`);
  }

  return {
    rows: rows.slice(1),
    headerMap,
  };
}

function findColumnByAliases(headers, aliases) {
  if (!Array.isArray(headers) || headers.length === 0) return -1;
  const normalizedAliases = aliases.map((item) => normalizeText(item).replace(/[_\s]+/g, " ").trim()).filter(Boolean);
  for (let i = 0; i < headers.length; i += 1) {
    const header = headers[i];
    if (!header) continue;
    if (normalizedAliases.some((alias) => header === alias || header.includes(alias) || alias.includes(header))) {
      return i;
    }
  }
  return -1;
}

function getCellByHeader(cells, headerMap, key) {
  const idx = Number(headerMap[key]);
  if (!Number.isInteger(idx) || idx < 0) return "";
  return String(cells[idx] || "").trim();
}

function resolvePlanType(typeRaw, amountRaw) {
  const type = normalizeText(typeRaw);
  if (type.includes("выбыт") || type.includes("расход")) return "Выбытие";
  if (type.includes("поступ") || type.includes("доход")) return "Поступление";

  const amount = parseAmount(amountRaw);
  if (Number.isFinite(amount) && amount < 0) return "Выбытие";
  return "Поступление";
}

function normalizePlanScenario(value) {
  return String(value || "base")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-zа-я0-9_-]/gi, "") || "base";
}

function normalizePlanProbability(value) {
  const normalized = normalizeText(value);
  if (normalized.includes("high") || normalized.includes("выс")) return "high";
  if (normalized.includes("low") || normalized.includes("низ")) return "low";
  if (normalized.includes("med") || normalized.includes("сред")) return "medium";
  return "medium";
}

function downloadPlanItemsTemplateCsv() {
  triggerDownload(new Blob([SAMPLE_PLAN_ITEMS], { type: "text/csv;charset=utf-8;" }), "plan_items_template.csv");
}

function downloadPlanOpeningsTemplateCsv() {
  triggerDownload(
    new Blob([SAMPLE_PLAN_OPENINGS], { type: "text/csv;charset=utf-8;" }),
    "plan_opening_balance_template.csv"
  );
}

function downloadPlanAssumptionsTemplateCsv() {
  triggerDownload(
    new Blob([SAMPLE_PLAN_ASSUMPTIONS], { type: "text/csv;charset=utf-8;" }),
    "plan_assumptions_template.csv"
  );
}

function downloadPlanForecastCsv() {
  if (!requirePermission("plan.export", "Недостаточно прав: роль не позволяет выгружать прогноз.")) return;
  const forecast = buildPlanForecast(state.plan);
  if (forecast.monthRows.length === 0) {
    if (els.planStatus) els.planStatus.textContent = "Нет данных для выгрузки прогноза.";
    return;
  }

  const headers = ["Месяц", "Начало месяца", "Поступления", "Выбытия", "Чистый поток", "Конец месяца", "Риск"];
  const lines = forecast.monthRows.map((row) => [
    row.month,
    row.openingBalance === null ? "" : formatNumberForCsv(row.openingBalance),
    formatNumberForCsv(row.inflow),
    formatNumberForCsv(row.outflow),
    formatNumberForCsv(row.net),
    row.closingBalance === null ? "" : formatNumberForCsv(row.closingBalance),
    row.risk ? "RISK" : "OK",
  ]);
  const csv = [headers, ...lines]
    .map((line) => line.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(";"))
    .join("\n");
  triggerDownload(new Blob([csv], { type: "text/csv;charset=utf-8;" }), "dds-plan-forecast.csv");
}

function bindAnalyticsEvents() {
  if (!els.analyticsSettingsForm) return;

  const onParamChange = () => {
    applyAnalyticsSettingsFromInputs();
    saveAnalyticsState(state.analytics);
    renderAnalyticsTab();
  };
  els.analyticsDateFrom?.addEventListener("change", onParamChange);
  els.analyticsDateTo?.addEventListener("change", onParamChange);
  els.analyticsCompareMode?.addEventListener("change", onParamChange);
  els.analyticsForecastHorizon?.addEventListener("change", onParamChange);
  els.analyticsForecastMode?.addEventListener("change", onParamChange);
  els.analyticsScenario?.addEventListener("change", onParamChange);
  els.analyticsSafeBalanceMode?.addEventListener("change", onParamChange);
  els.analyticsToggleFindingsBtn?.addEventListener("click", () => {
    state.analytics.showAllFindings = !state.analytics.showAllFindings;
    saveAnalyticsState(state.analytics);
    renderAnalyticsTab();
  });

  els.analyticsApplyBtn?.addEventListener("click", () => {
    if (!requirePermission("analytics.settings", "Недостаточно прав: роль не позволяет менять параметры аналитики.")) return;
    applyAnalyticsSettingsFromInputs();
    saveAnalyticsState(state.analytics);
    logChange("ANALYTICS_SETTINGS_UPDATED", "Аналитика", "Параметры аналитики обновлены");
    renderAnalyticsTab();
  });

  els.analyticsSyncWithReportBtn?.addEventListener("click", () => {
    if (!requirePermission("analytics.settings", "Недостаточно прав: роль не позволяет менять параметры аналитики.")) return;
    syncAnalyticsPeriodWithReport();
    saveAnalyticsState(state.analytics);
    renderAnalyticsTab();
  });

  els.analyticsExportBtn?.addEventListener("click", exportAnalyticsCsv);
  els.analyticsPrintBtn?.addEventListener("click", () => {
    if (!requirePermission("analytics.export", "Недостаточно прав: роль не позволяет печатать аналитику.")) return;
    window.print();
  });
}

function syncAnalyticsPeriodWithReport() {
  const from = String(els.dateFromInput?.value || "").trim();
  const to = String(els.dateToInput?.value || "").trim();
  if (from) state.analytics.dateFrom = from;
  if (to) state.analytics.dateTo = to;
  fillAnalyticsSettingsInputs();
}

function applyAnalyticsSettingsFromInputs() {
  state.analytics.dateFrom = String(els.analyticsDateFrom?.value || "").trim();
  state.analytics.dateTo = String(els.analyticsDateTo?.value || "").trim();
  state.analytics.compareMode = normalizeAnalyticsCompareMode(els.analyticsCompareMode?.value);
  state.analytics.forecastHorizon = normalizeIntInRange(els.analyticsForecastHorizon?.value, 30, 7, 90);
  state.analytics.forecastMode = normalizeAnalyticsForecastMode(els.analyticsForecastMode?.value);
  state.analytics.scenario = normalizeAnalyticsScenario(els.analyticsScenario?.value);
  state.analytics.openingBalance = normalizeMoneyInput(els.analyticsOpeningBalance?.value, 0);
  state.analytics.safeBalanceMode = normalizeSafeBalanceMode(els.analyticsSafeBalanceMode?.value);
  state.analytics.safeBalanceFixed = normalizeMoneyInput(els.analyticsSafeBalanceFixed?.value, 20000);
  state.analytics.safeBalancePercent = normalizeIntInRange(els.analyticsSafeBalancePercent?.value, 30, 1, 500);
  state.analytics.top1Threshold = normalizeIntInRange(els.analyticsTop1Threshold?.value, 40, 1, 100);
  state.analytics.top3Threshold = normalizeIntInRange(els.analyticsTop3Threshold?.value, 70, 1, 100);
  state.analytics.expenseShareThreshold = normalizeIntInRange(els.analyticsExpenseShareThreshold?.value, 30, 1, 100);
  state.analytics.investmentLoadThreshold = normalizeIntInRange(els.analyticsInvestmentLoadThreshold?.value, 25, 1, 100);
  state.analytics.outflowSurgeThreshold = normalizeIntInRange(els.analyticsOutflowSurgeThreshold?.value, 30, 1, 300);
  state.analytics.outflowSurgeLookback = normalizeIntInRange(els.analyticsOutflowSurgeLookback?.value, 3, 1, 12);
  state.analytics.scenarioOptimisticInflow = normalizeIntInRange(els.analyticsScenarioOptimisticInflow?.value, 10, 0, 200);
  state.analytics.scenarioOptimisticOutflow = normalizeIntInRange(els.analyticsScenarioOptimisticOutflow?.value, 5, 0, 100);
  state.analytics.scenarioConservativeInflow = normalizeIntInRange(els.analyticsScenarioConservativeInflow?.value, 15, 0, 100);
  state.analytics.scenarioConservativeOutflow = normalizeIntInRange(els.analyticsScenarioConservativeOutflow?.value, 10, 0, 200);
}

function fillAnalyticsSettingsInputs() {
  if (!els.analyticsSettingsForm) return;
  els.analyticsDateFrom.value = state.analytics.dateFrom || "";
  els.analyticsDateTo.value = state.analytics.dateTo || "";
  els.analyticsCompareMode.value = normalizeAnalyticsCompareMode(state.analytics.compareMode);
  els.analyticsForecastHorizon.value = String(normalizeIntInRange(state.analytics.forecastHorizon, 30, 7, 90));
  els.analyticsForecastMode.value = normalizeAnalyticsForecastMode(state.analytics.forecastMode);
  els.analyticsScenario.value = normalizeAnalyticsScenario(state.analytics.scenario);
  els.analyticsOpeningBalance.value = formatNumberForInput(Number(state.analytics.openingBalance) || 0);
  els.analyticsSafeBalanceFixed.value = formatNumberForInput(Number(state.analytics.safeBalanceFixed) || 0);
  els.analyticsSafeBalancePercent.value = String(normalizeIntInRange(state.analytics.safeBalancePercent, 30, 1, 500));
  els.analyticsSafeBalanceMode.value = normalizeSafeBalanceMode(state.analytics.safeBalanceMode);
  els.analyticsTop1Threshold.value = String(normalizeIntInRange(state.analytics.top1Threshold, 40, 1, 100));
  els.analyticsTop3Threshold.value = String(normalizeIntInRange(state.analytics.top3Threshold, 70, 1, 100));
  els.analyticsExpenseShareThreshold.value = String(normalizeIntInRange(state.analytics.expenseShareThreshold, 30, 1, 100));
  els.analyticsInvestmentLoadThreshold.value = String(normalizeIntInRange(state.analytics.investmentLoadThreshold, 25, 1, 100));
  els.analyticsOutflowSurgeThreshold.value = String(normalizeIntInRange(state.analytics.outflowSurgeThreshold, 30, 1, 300));
  els.analyticsOutflowSurgeLookback.value = String(normalizeIntInRange(state.analytics.outflowSurgeLookback, 3, 1, 12));
  els.analyticsScenarioOptimisticInflow.value = String(normalizeIntInRange(state.analytics.scenarioOptimisticInflow, 10, 0, 200));
  els.analyticsScenarioOptimisticOutflow.value = String(normalizeIntInRange(state.analytics.scenarioOptimisticOutflow, 5, 0, 100));
  els.analyticsScenarioConservativeInflow.value = String(
    normalizeIntInRange(state.analytics.scenarioConservativeInflow, 15, 0, 100)
  );
  els.analyticsScenarioConservativeOutflow.value = String(
    normalizeIntInRange(state.analytics.scenarioConservativeOutflow, 10, 0, 200)
  );
}

function renderAnalyticsTab() {
  if (!els.analyticsTab || !els.analyticsSummaryMetrics) return;

  if ((!state.analytics.dateFrom || !state.analytics.dateTo) && (els.dateFromInput?.value || els.dateToInput?.value)) {
    syncAnalyticsPeriodWithReport();
    saveAnalyticsState(state.analytics);
  }
  fillAnalyticsSettingsInputs();

  const period = resolveAnalyticsPeriod();
  const articleMap = buildArticleMap(state.articles);
  const currentOps = getOperationsByPeriod(period.from, period.to, articleMap);
  const previousPeriod = getPreviousPeriod(period.from, period.to, state.analytics.compareMode);
  const previousOps = getOperationsByPeriod(previousPeriod.from, previousPeriod.to, articleMap);
  const allOps = state.operationsRaw.map((row) => enrichOperation(row, articleMap));
  const averageMonthlyOutflow = computeAverageMonthlyOutflow(allOps, state.analytics.outflowSurgeLookback, period.to);
  const safeBalance = resolveSafeBalance(state.analytics, averageMonthlyOutflow);

  const summary = buildFactSummary(currentOps, Number(state.analytics.openingBalance) || 0, safeBalance);
  const previousSummary = buildFactSummary(previousOps, Number(state.analytics.openingBalance) || 0, safeBalance);
  const structure = buildStructureAnalysis(currentOps);
  const comparison = buildComparisonSummary(summary, previousSummary);
  const forecast = buildForecastSummary({
    period,
    currentSummary: summary,
    allOps,
    safeBalance,
    settings: state.analytics,
  });
  const findings = buildAnalyticsFindings({
    summary,
    safeBalance,
    structure,
    comparison,
    forecast,
    settings: state.analytics,
  });
  const recommendations = uniqueValues(findings.map((item) => item.recommendation).filter(Boolean));

  renderAnalyticsSummaryMetrics(summary, safeBalance, forecast);
  renderStructureTables(structure);
  renderComparisonTable(comparison);
  renderForecastTable(forecast.rows);
  renderFindings(findings);
  renderRecommendations(recommendations);

  if (els.analyticsStatus) {
    els.analyticsStatus.textContent = `Период: ${toDateInputValue(period.from)} - ${toDateInputValue(period.to)}. ` +
      `Операций в периоде: ${summary.operationCount}. Тех. операции: ${summary.technicalCount}. ` +
      `Режим прогноза: ${forecast.modeLabel}.`;
  }

  state.analytics.latest = {
    period,
    previousPeriod,
    summary,
    previousSummary,
    structure,
    comparison,
    forecast,
    findings,
    recommendations,
    safeBalance,
  };
}

function resolveAnalyticsPeriod() {
  let from = parseFlexibleDate(state.analytics.dateFrom || "");
  let to = parseFlexibleDate(state.analytics.dateTo || "");

  if (!from && els.dateFromInput?.value) from = parseFlexibleDate(els.dateFromInput.value);
  if (!to && els.dateToInput?.value) to = parseFlexibleDate(els.dateToInput.value);

  if ((!from || !to) && state.operationsRaw.length > 0) {
    const sorted = state.operationsRaw
      .map((row) => row.dateObj)
      .filter((date) => date instanceof Date && !Number.isNaN(date.getTime()))
      .sort((a, b) => a.getTime() - b.getTime());
    if (!from && sorted[0]) from = startOfDay(sorted[0]);
    if (!to && sorted.at(-1)) to = startOfDay(sorted.at(-1));
  }

  if (!from) from = startOfDay(new Date());
  if (!to) to = startOfDay(new Date());
  from = startOfDay(from);
  to = startOfDay(to);
  if (from > to) {
    const tmp = from;
    from = to;
    to = tmp;
  }
  return { from, to };
}

function getOperationsByPeriod(from, to, articleMap) {
  const fromStart = startOfDay(from);
  const toEnd = endOfDay(to);
  return state.operationsRaw
    .map((row) => enrichOperation(row, articleMap))
    .filter((op) => op.dateObj >= fromStart && op.dateObj <= toEnd);
}

function getPreviousPeriod(from, to, compareModeRaw) {
  const compareMode = normalizeAnalyticsCompareMode(compareModeRaw);
  const fromDate = startOfDay(from);
  const toDate = startOfDay(to);
  const lengthDays = Math.max(1, Math.round((toDate.getTime() - fromDate.getTime()) / 86400000) + 1);

  if (compareMode === "week") {
    return { from: addDays(fromDate, -7), to: addDays(toDate, -7) };
  }
  if (compareMode === "month") {
    return { from: addMonths(fromDate, -1), to: addMonths(toDate, -1) };
  }
  if (compareMode === "quarter") {
    return { from: addMonths(fromDate, -3), to: addMonths(toDate, -3) };
  }

  const previousTo = addDays(fromDate, -1);
  const previousFrom = addDays(previousTo, -(lengthDays - 1));
  return { from: previousFrom, to: previousTo };
}

function buildFactSummary(operations, openingBalance, safeBalance) {
  const summary = {
    openingBalance: Number(openingBalance) || 0,
    inflow: 0,
    outflow: 0,
    net: 0,
    closingBalance: 0,
    operatingFlow: 0,
    investingFlow: 0,
    financingFlow: 0,
    technicalFlow: 0,
    operationCount: operations.length,
    technicalCount: 0,
    statusKey: "normal",
    statusLabel: "Норма",
  };

  const flowByClass = {
    operating: { in: 0, out: 0 },
    investing: { in: 0, out: 0 },
    financing: { in: 0, out: 0 },
    technical: { in: 0, out: 0 },
  };

  operations.forEach((op) => {
    const cls = classifyCashflowActivity(op.activity);
    const amount = Number(op.amount) || 0;
    const isInflow = op.direction === "Поступление";
    if (isInflow) flowByClass[cls].in += amount;
    else flowByClass[cls].out += amount;
  });

  summary.technicalCount = operations.filter((op) => classifyCashflowActivity(op.activity) === "technical").length;
  summary.technicalFlow = flowByClass.technical.in - flowByClass.technical.out;

  summary.inflow = flowByClass.operating.in + flowByClass.investing.in + flowByClass.financing.in;
  summary.outflow = flowByClass.operating.out + flowByClass.investing.out + flowByClass.financing.out;
  summary.net = summary.inflow - summary.outflow;
  summary.closingBalance = summary.openingBalance + summary.net;

  summary.operatingFlow = flowByClass.operating.in - flowByClass.operating.out;
  summary.investingFlow = flowByClass.investing.in - flowByClass.investing.out;
  summary.financingFlow = flowByClass.financing.in - flowByClass.financing.out;

  if (summary.closingBalance <= 0) {
    summary.statusKey = "gap";
    summary.statusLabel = "Кассовый разрыв";
  } else if (summary.closingBalance <= safeBalance) {
    summary.statusKey = "risk";
    summary.statusLabel = "Риск";
  } else if (summary.closingBalance <= safeBalance * 1.25) {
    summary.statusKey = "attention";
    summary.statusLabel = "Зона внимания";
  }

  return summary;
}

function classifyCashflowActivity(activityRaw) {
  if (isTechnicalActivity(activityRaw)) return "technical";
  const activity = normalizeText(activityRaw);
  if (activity.startsWith("01") || activity.includes("операцион")) return "operating";
  if (activity.startsWith("02") || activity.includes("инвестицион")) return "investing";
  if (activity.startsWith("03") || activity.includes("финансов")) return "financing";
  return "financing";
}

function buildStructureAnalysis(operations) {
  const inflowByArticle = new Map();
  const outflowByArticle = new Map();
  const inflowByCounterparty = new Map();
  const outflowByCounterparty = new Map();
  let totalInflow = 0;
  let totalOutflow = 0;

  operations.forEach((op) => {
    if (classifyCashflowActivity(op.activity) === "technical") return;
    const isInflow = op.direction === "Поступление";
    const amount = Math.abs(Number(op.amount) || 0);
    const article = op.article || UNKNOWN_ARTICLE;
    const counterparty = String(op.counterparty || "").trim() || "Без контрагента";

    if (isInflow) {
      totalInflow += amount;
      inflowByArticle.set(article, (inflowByArticle.get(article) || 0) + amount);
      inflowByCounterparty.set(counterparty, (inflowByCounterparty.get(counterparty) || 0) + amount);
    } else {
      totalOutflow += amount;
      outflowByArticle.set(article, (outflowByArticle.get(article) || 0) + amount);
      outflowByCounterparty.set(counterparty, (outflowByCounterparty.get(counterparty) || 0) + amount);
    }
  });

  return {
    totalInflow,
    totalOutflow,
    inflowTopArticles: buildTopShareRows(inflowByArticle, totalInflow, 5),
    outflowTopArticles: buildTopShareRows(outflowByArticle, totalOutflow, 5),
    inflowTopCounterparties: buildTopShareRows(inflowByCounterparty, totalInflow, 5),
    outflowTopCounterparties: buildTopShareRows(outflowByCounterparty, totalOutflow, 5),
    inflowTop1Share: getTopShare(inflowByArticle, totalInflow, 1),
    inflowTop3Share: getTopShare(inflowByCounterparty, totalInflow, 3),
    outflowTop1Share: getTopShare(outflowByArticle, totalOutflow, 1),
  };
}

function buildTopShareRows(map, total, limit) {
  return [...map.entries()]
    .map(([name, value]) => ({
      name,
      amount: Number(value) || 0,
      share: total > 0 ? ((Number(value) || 0) / total) * 100 : 0,
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, limit);
}

function getTopShare(map, total, count) {
  if (!total || total <= 0) return 0;
  const topSum = [...map.values()]
    .map((value) => Number(value) || 0)
    .sort((a, b) => b - a)
    .slice(0, count)
    .reduce((sum, value) => sum + value, 0);
  return (topSum / total) * 100;
}

function buildComparisonSummary(current, previous) {
  const rows = [
    ["Поступления", current.inflow, previous.inflow],
    ["Выплаты", current.outflow, previous.outflow],
    ["Чистый денежный поток", current.net, previous.net],
    ["Операционный поток", current.operatingFlow, previous.operatingFlow],
    ["Конечный остаток", current.closingBalance, previous.closingBalance],
  ];

  return rows.map(([label, currentValue, previousValue]) => {
    const delta = currentValue - previousValue;
    const deltaPct = previousValue === 0 ? null : (delta / Math.abs(previousValue)) * 100;
    return {
      label,
      currentValue,
      previousValue,
      delta,
      deltaPct,
    };
  });
}

function buildForecastSummary({ period, currentSummary, allOps, safeBalance, settings }) {
  const startDate = addDays(period.to, 1);
  const horizon = normalizeIntInRange(settings.forecastHorizon, 30, 7, 90);
  const scenarioFactors = resolveScenarioFactors(settings);
  const normalizedMode = normalizeAnalyticsForecastMode(settings.forecastMode);

  let modeUsed = normalizedMode;
  let dailyRows = [];

  if (normalizedMode === "plan") {
    dailyRows = buildPlannedForecastDailyRows(startDate, horizon, settings.scenario, scenarioFactors);
    if (dailyRows.length === 0) {
      modeUsed = "stat";
      dailyRows = buildStatisticalForecastDailyRows(startDate, horizon, allOps, scenarioFactors);
    }
  } else {
    dailyRows = buildStatisticalForecastDailyRows(startDate, horizon, allOps, scenarioFactors);
  }

  if (dailyRows.length === 0) {
    dailyRows = Array.from({ length: horizon }, (_, index) => ({
      date: addDays(startDate, index),
      inflow: 0,
      outflow: 0,
    }));
  }

  const rows = [];
  let opening = Number(currentSummary.closingBalance) || 0;
  dailyRows.forEach((dayRow) => {
    const inflow = Math.max(0, Number(dayRow.inflow) || 0);
    const outflow = Math.max(0, Number(dayRow.outflow) || 0);
    const net = inflow - outflow;
    const closing = opening + net;
    const risk = resolveRiskStatus(closing, safeBalance);
    rows.push({
      period: toDateInputValue(dayRow.date),
      openingBalance: opening,
      inflow,
      outflow,
      net,
      closingBalance: closing,
      statusKey: risk.key,
      statusLabel: risk.label,
      comment: risk.comment,
    });
    opening = closing;
  });

  const firstGap = rows.find((row) => row.statusKey === "gap") || null;
  const firstBelowSafe =
    rows.find((row) => row.statusKey === "risk" || row.statusKey === "attention" || row.statusKey === "gap") || null;
  const forecastOutflow = rows.reduce((sum, row) => sum + row.outflow, 0);
  const averageMonthlyOutflow = computeAverageMonthlyOutflow(allOps, settings.outflowSurgeLookback, period.to);
  const monthlyEquivalentOutflow = (forecastOutflow / Math.max(1, horizon)) * 30;
  const outflowSurgePct =
    averageMonthlyOutflow > 0 ? ((monthlyEquivalentOutflow - averageMonthlyOutflow) / averageMonthlyOutflow) * 100 : 0;

  return {
    rows,
    modeUsed,
    modeLabel: modeUsed === "plan" ? "Плановый" : normalizedMode === "plan" ? "Статистический (fallback)" : "Статистический",
    firstGap,
    firstBelowSafe,
    safeBalance,
    totalInflow: rows.reduce((sum, row) => sum + row.inflow, 0),
    totalOutflow: forecastOutflow,
    totalNet: rows.reduce((sum, row) => sum + row.net, 0),
    endingBalance: rows.length > 0 ? rows[rows.length - 1].closingBalance : currentSummary.closingBalance,
    outflowSurgePct,
  };
}

function buildPlannedForecastDailyRows(startDate, horizon, scenarioRaw, scenarioFactors) {
  const endDate = addDays(startDate, horizon - 1);
  const scenarioPrimary = mapAnalyticsScenarioToPlanScenario(scenarioRaw);
  const scenarioCandidates = [scenarioPrimary];
  if (scenarioPrimary === "conservative") scenarioCandidates.push("pessimistic");
  if (!scenarioCandidates.includes("base")) scenarioCandidates.push("base");

  let plannedItems = [];
  scenarioCandidates.some((scenarioName) => {
    const rows = (state.plan.items || []).filter((item) => normalizePlanScenario(item.scenario || "base") === scenarioName);
    if (rows.length > 0) {
      plannedItems = rows;
      return true;
    }
    return false;
  });

  if (plannedItems.length === 0) return [];

  const planScenarioAssumption = getAssumptionByScenario(state.plan.assumptions || [], scenarioPrimary);
  const inflowFactor = scenarioFactors.inflow * (Number(planScenarioAssumption.inflowFactor) || 1);
  const outflowFactor = scenarioFactors.outflow * (Number(planScenarioAssumption.outflowFactor) || 1);

  const byDate = new Map();
  plannedItems.forEach((item) => {
    const dateObj = parseFlexibleDate(item.date || "") || parseFlexibleDate(`${item.month}-01`);
    if (!dateObj) return;
    const day = startOfDay(dateObj);
    if (day < startDate || day > endDate) return;
    const key = toDateInputValue(day);
    if (!byDate.has(key)) byDate.set(key, { date: day, inflow: 0, outflow: 0 });
    const bucket = byDate.get(key);
    const amount = Math.abs(Number(item.amount) || 0);
    const isOutflow = normalizeText(item.type).includes("выбыт") || normalizeText(item.type).includes("расход");
    if (isOutflow) bucket.outflow += amount * outflowFactor;
    else bucket.inflow += amount * inflowFactor;
  });

  return [...byDate.values()].sort((a, b) => a.date.getTime() - b.date.getTime());
}

function buildStatisticalForecastDailyRows(startDate, horizon, allOps, scenarioFactors) {
  const lookbackDays = Math.max(30, Math.min(120, horizon * 3));
  const lookbackStart = addDays(startDate, -lookbackDays);
  const historyOps = (allOps || []).filter((op) => {
    if (classifyCashflowActivity(op.activity) === "technical") return false;
    return op.dateObj >= lookbackStart && op.dateObj < startDate;
  });

  const weekdayStats = buildWeekdayCashflowStats(historyOps, lookbackStart, addDays(startDate, -1));
  const globalDays = Math.max(1, lookbackDays);
  const globalInflow = historyOps
    .filter((op) => op.direction === "Поступление")
    .reduce((sum, op) => sum + op.amount, 0) / globalDays;
  const globalOutflow = historyOps
    .filter((op) => op.direction === "Выбытие")
    .reduce((sum, op) => sum + op.amount, 0) / globalDays;

  return Array.from({ length: horizon }, (_, index) => {
    const date = addDays(startDate, index);
    const weekday = date.getDay();
    const dayStat = weekdayStats[weekday] || { inflow: 0, outflow: 0 };
    const inflowBase = dayStat.inflow > 0 ? dayStat.inflow : globalInflow;
    const outflowBase = dayStat.outflow > 0 ? dayStat.outflow : globalOutflow;
    return {
      date,
      inflow: inflowBase * scenarioFactors.inflow,
      outflow: outflowBase * scenarioFactors.outflow,
    };
  });
}

function buildWeekdayCashflowStats(historyOps, from, to) {
  const stats = Array.from({ length: 7 }, () => ({ dayCount: 0, inflow: 0, outflow: 0 }));
  let cursor = startOfDay(from);
  const end = startOfDay(to);
  while (cursor <= end) {
    const weekday = cursor.getDay();
    stats[weekday].dayCount += 1;
    cursor = addDays(cursor, 1);
  }

  historyOps.forEach((op) => {
    const weekday = op.dateObj.getDay();
    if (op.direction === "Поступление") stats[weekday].inflow += op.amount;
    else stats[weekday].outflow += op.amount;
  });

  return stats.map((item) => ({
    inflow: item.dayCount > 0 ? item.inflow / item.dayCount : 0,
    outflow: item.dayCount > 0 ? item.outflow / item.dayCount : 0,
  }));
}

function resolveScenarioFactors(settings) {
  const scenario = normalizeAnalyticsScenario(settings.scenario);
  if (scenario === "optimistic") {
    return {
      inflow: 1 + normalizeIntInRange(settings.scenarioOptimisticInflow, 10, 0, 200) / 100,
      outflow: Math.max(0, 1 - normalizeIntInRange(settings.scenarioOptimisticOutflow, 5, 0, 100) / 100),
    };
  }
  if (scenario === "conservative") {
    return {
      inflow: Math.max(0, 1 - normalizeIntInRange(settings.scenarioConservativeInflow, 15, 0, 100) / 100),
      outflow: 1 + normalizeIntInRange(settings.scenarioConservativeOutflow, 10, 0, 200) / 100,
    };
  }
  return { inflow: 1, outflow: 1 };
}

function resolveSafeBalance(settings, averageMonthlyOutflow) {
  const safeMode = normalizeSafeBalanceMode(settings.safeBalanceMode);
  if (safeMode === "percent_outflow") {
    const percent = normalizeIntInRange(settings.safeBalancePercent, 30, 1, 500);
    return (Number(averageMonthlyOutflow) || 0) * (percent / 100);
  }
  return Number(settings.safeBalanceFixed) || 0;
}

function resolveRiskStatus(closingBalance, safeBalance) {
  if (closingBalance <= 0) {
    return {
      key: "gap",
      label: "Кассовый разрыв",
      comment: `Дефицит ${formatMoney(Math.abs(closingBalance))}`,
    };
  }
  if (closingBalance <= safeBalance) {
    return {
      key: "risk",
      label: "Риск",
      comment: "Остаток ниже безопасного уровня",
    };
  }
  if (closingBalance <= safeBalance * 1.25) {
    return {
      key: "attention",
      label: "Зона внимания",
      comment: "Запас ликвидности снижен",
    };
  }
  return { key: "normal", label: "Безопасно", comment: "-" };
}

function buildAnalyticsFindings({ summary, safeBalance, structure, comparison, forecast, settings }) {
  const findings = [];
  const addFinding = (item) => {
    if (!item || !item.code) return;
    if (findings.some((row) => row.code === item.code)) return;
    findings.push(item);
  };

  if (forecast.firstGap) {
    addFinding({
      code: "cash_gap_forecast",
      priority: 1,
      severity: "high",
      title: "Прогнозируется кассовый разрыв",
      fact: `На дату ${forecast.firstGap.period} остаток становится отрицательным: ${formatMoney(forecast.firstGap.closingBalance)}.`,
      interpretation: "При текущем сценарии денежных средств не хватает для покрытия выплат.",
      recommendation:
        "Перенести необязательные выплаты, ускорить сбор дебиторки, согласовать отсрочки и подготовить резервное финансирование.",
    });
  }

  if (summary.closingBalance <= safeBalance) {
    addFinding({
      code: "low_closing_balance",
      priority: 2,
      severity: summary.closingBalance <= 0 ? "high" : "medium",
      title: "Остаток на конец периода в рискованной зоне",
      fact: `Конечный остаток: ${formatMoney(summary.closingBalance)} при безопасном уровне ${formatMoney(safeBalance)}.`,
      interpretation: "Запас ликвидности недостаточен для устойчивого покрытия ближайших выплат.",
      recommendation:
        "Сформировать резерв ликвидности, ограничить необязательные выплаты и усилить недельное планирование платежей.",
    });
  }

  if (summary.operatingFlow < 0) {
    addFinding({
      code: "negative_operating_flow",
      priority: 3,
      severity: "high",
      title: "Отрицательный операционный денежный поток",
      fact: `Операционный поток: ${formatMoney(summary.operatingFlow)}.`,
      interpretation: "Основная деятельность не покрывает текущие денежные выплаты.",
      recommendation:
        "Проверить дебиторскую задолженность, маржинальность продаж, объём закупок и постоянные расходы.",
    });
  }

  if (summary.operatingFlow < 0 && summary.financingFlow > 0) {
    addFinding({
      code: "financing_dependency",
      priority: 4,
      severity: "medium",
      title: "Зависимость от внешнего финансирования",
      fact: `Финансовый поток положительный: ${formatMoney(summary.financingFlow)} при отрицательном операционном потоке.`,
      interpretation: "Операционный дефицит компенсируется кредитами или иными финансовыми вливаниями.",
      recommendation:
        "Снизить зависимость от заемных средств за счет улучшения операционной рентабельности и контроля оборотного капитала.",
    });
  }

  if (forecast.outflowSurgePct > normalizeIntInRange(settings.outflowSurgeThreshold, 30, 1, 300)) {
    addFinding({
      code: "outflow_surge",
      priority: 5,
      severity: "medium",
      title: "Ожидается повышенная нагрузка по выплатам",
      fact: `Прогнозные выплаты выше среднего на ${formatPercent(forecast.outflowSurgePct)}.`,
      interpretation: "Рост выплат оказывает дополнительное давление на ликвидность.",
      recommendation:
        "Перепроверить график платежей и распределить крупные выплаты по нескольким периодам при возможности.",
    });
  }

  if (structure.inflowTop3Share > normalizeIntInRange(settings.top3Threshold, 70, 1, 100)) {
    addFinding({
      code: "inflow_concentration_top3",
      priority: 6,
      severity: "medium",
      title: "Высокая концентрация поступлений",
      fact: `Доля топ-3 источников поступлений: ${formatPercent(structure.inflowTop3Share)}.`,
      interpretation: "Зависимость от ограниченного числа источников повышает риск просадки притока денег.",
      recommendation: "Диверсифицировать источники поступлений и снизить зависимость от крупных клиентов.",
    });
  }

  if (structure.inflowTop1Share > normalizeIntInRange(settings.top1Threshold, 40, 1, 100)) {
    addFinding({
      code: "inflow_concentration_top1",
      priority: 6,
      severity: "medium",
      title: "Высокая зависимость от одного источника поступлений",
      fact: `Доля крупнейшего источника поступлений: ${formatPercent(structure.inflowTop1Share)}.`,
      interpretation: "Концентрация по одному источнику делает поток менее устойчивым.",
      recommendation: "Снизить зависимость от одного крупного клиента и расширить воронку поступлений.",
    });
  }

  const investmentShare = summary.outflow > 0 ? (Math.max(0, -summary.investingFlow) / summary.outflow) * 100 : 0;
  if (investmentShare > normalizeIntInRange(settings.investmentLoadThreshold, 25, 1, 100)) {
    addFinding({
      code: "investment_load",
      priority: 7,
      severity: "medium",
      title: "Повышенная инвестиционная нагрузка",
      fact: `Инвестиционные выплаты составляют ${formatPercent(investmentShare)} от всех выплат периода.`,
      interpretation: "Капитальные вложения заметно снижают доступный денежный остаток.",
      recommendation: "Оценить перенос части инвестиций и приоритизировать проекты с быстрым возвратом.",
    });
  }

  const majorExpenseShare = structure.outflowTop1Share;
  if (majorExpenseShare > normalizeIntInRange(settings.expenseShareThreshold, 30, 1, 100)) {
    addFinding({
      code: "expense_concentration",
      priority: 8,
      severity: "low",
      title: "Высокая концентрация выплат по одной статье",
      fact: `Крупнейшая расходная статья занимает ${formatPercent(majorExpenseShare)} от всех выплат.`,
      interpretation: "Одна статья существенно влияет на общий денежный поток.",
      recommendation: "Пересмотреть условия по этой статье и проработать варианты оптимизации.",
    });
  }

  if (summary.net > 0) {
    addFinding({
      code: "period_positive_net",
      priority: 9,
      severity: "low",
      title: "Период завершен с положительным чистым потоком",
      fact: `Чистый денежный поток: ${formatMoney(summary.net)}.`,
      interpretation: "За период объем денежных средств увеличился.",
      recommendation: "",
    });
  } else if (summary.net < 0) {
    addFinding({
      code: "period_negative_net",
      priority: 9,
      severity: "medium",
      title: "Период завершен с отрицательным чистым потоком",
      fact: `Чистый денежный поток: ${formatMoney(summary.net)}.`,
      interpretation: "За период объем денежных средств сократился.",
      recommendation: "Проверить приоритет выплат и ускорить поступления по ключевым клиентам.",
    });
  } else {
    addFinding({
      code: "period_balanced_net",
      priority: 9,
      severity: "low",
      title: "Поток периода сбалансирован",
      fact: "Чистый денежный поток близок к нулю.",
      interpretation: "Поступления и выплаты в периоде сопоставимы.",
      recommendation: "",
    });
  }

  const netComparison = comparison.find((row) => row.label === "Чистый денежный поток");
  if (netComparison && Number.isFinite(netComparison.deltaPct)) {
    if (netComparison.deltaPct > 0) {
      addFinding({
        code: "net_improved_vs_prev",
        priority: 10,
        severity: "low",
        title: "Чистый поток улучшился к прошлому периоду",
        fact: `Изменение: +${formatPercent(netComparison.deltaPct)}.`,
        interpretation: "Динамика ДДС положительная относительно предыдущего периода.",
        recommendation: "",
      });
    } else if (netComparison.deltaPct < 0) {
      addFinding({
        code: "net_worse_vs_prev",
        priority: 10,
        severity: "medium",
        title: "Чистый поток ухудшился к прошлому периоду",
        fact: `Изменение: ${formatPercent(netComparison.deltaPct)}.`,
        interpretation: "Динамика ДДС отрицательная относительно предыдущего периода.",
        recommendation: "Провести детализацию статей с максимальным ухудшением и скорректировать план платежей.",
      });
    }
  }

  return findings.sort((a, b) => a.priority - b.priority);
}

function renderAnalyticsSummaryMetrics(summary, safeBalance, forecast) {
  const metrics = [
    { label: "Остаток на начало", value: formatMoney(summary.openingBalance) },
    { label: "Поступления", value: formatMoney(summary.inflow) },
    { label: "Выплаты", value: formatMoney(summary.outflow) },
    { label: "Чистый поток", value: formatMoney(summary.net) },
    { label: "Остаток на конец", value: formatMoney(summary.closingBalance) },
    { label: "Операционный поток", value: formatMoney(summary.operatingFlow) },
    { label: "Инвестиционный поток", value: formatMoney(summary.investingFlow) },
    { label: "Финансовый поток", value: formatMoney(summary.financingFlow) },
    { label: `Прогноз ${state.analytics.forecastHorizon}д`, value: formatMoney(forecast.endingBalance) },
    { label: "Безопасный остаток", value: formatMoney(safeBalance) },
  ];

  els.analyticsSummaryMetrics.innerHTML = metrics
    .map(
      (item) => `
      <article class="metric">
        <div class="label">${item.label}</div>
        <div class="value">${item.value}</div>
      </article>
    `
    )
    .join("");
}

function renderStructureTables(structure) {
  fillStructureTable(els.analyticsInflowTopArticlesBody, structure.inflowTopArticles, "Нет поступлений.");
  fillStructureTable(els.analyticsOutflowTopArticlesBody, structure.outflowTopArticles, "Нет выплат.");
  fillStructureTable(els.analyticsInflowTopCounterpartiesBody, structure.inflowTopCounterparties, "Нет данных по контрагентам.");
  fillStructureTable(els.analyticsOutflowTopCounterpartiesBody, structure.outflowTopCounterparties, "Нет данных по контрагентам.");
}

function fillStructureTable(bodyEl, rows, emptyText) {
  if (!bodyEl) return;
  if (!rows || rows.length === 0) {
    bodyEl.innerHTML = `<tr><td colspan="4" class="empty">${emptyText}</td></tr>`;
    return;
  }
  bodyEl.innerHTML = rows
    .map(
      (row, index) => `
      <tr>
        <td class="cell-rank">${index + 1}</td>
        <td>${escapeHtml(row.name)}</td>
        <td class="cell-number">${formatMoney(row.amount)}</td>
        <td class="cell-number">${formatPercent(row.share)}</td>
      </tr>
    `
    )
    .join("");
}

function renderComparisonTable(comparisonRows) {
  if (!els.analyticsComparisonBody) return;
  if (!comparisonRows || comparisonRows.length === 0) {
    els.analyticsComparisonBody.innerHTML = `<tr><td colspan="4" class="empty">Нет данных для сравнения.</td></tr>`;
    return;
  }

  els.analyticsComparisonBody.innerHTML = comparisonRows
    .map((row) => {
      const deltaLabel = Number.isFinite(row.deltaPct)
        ? `${formatMoney(row.delta)} (${row.delta >= 0 ? "+" : ""}${formatPercent(row.deltaPct)})`
        : `${formatMoney(row.delta)} (н/д %)`;
      return `
        <tr>
          <td>${escapeHtml(row.label)}</td>
          <td>${formatMoney(row.currentValue)}</td>
          <td>${formatMoney(row.previousValue)}</td>
          <td>${deltaLabel}</td>
        </tr>
      `;
    })
    .join("");
}

function renderForecastTable(rows) {
  if (!els.analyticsForecastBody) return;
  if (!rows || rows.length === 0) {
    els.analyticsForecastBody.innerHTML = `<tr><td colspan="8" class="empty">Нет данных для прогноза.</td></tr>`;
    return;
  }
  els.analyticsForecastBody.innerHTML = rows
    .map(
      (row) => `
      <tr class="${row.statusKey === "gap" ? "unresolved-row" : ""}">
        <td>${escapeHtml(row.period)}</td>
        <td>${formatMoney(row.openingBalance)}</td>
        <td>${formatMoney(row.inflow)}</td>
        <td>${formatMoney(row.outflow)}</td>
        <td>${formatMoney(row.net)}</td>
        <td>${formatMoney(row.closingBalance)}</td>
        <td><span class="risk-chip ${row.statusKey}">${escapeHtml(row.statusLabel)}</span></td>
        <td>${escapeHtml(row.comment)}</td>
      </tr>
    `
    )
    .join("");
}

function renderFindings(findings) {
  if (!els.analyticsFindingsList || !els.analyticsToggleFindingsBtn) return;
  if (!findings || findings.length === 0) {
    els.analyticsFindingsList.innerHTML = `<div class="empty">Нет данных для формирования выводов.</div>`;
    els.analyticsToggleFindingsBtn.classList.add("hidden");
    return;
  }

  const showAll = Boolean(state.analytics.showAllFindings);
  const visible = showAll ? findings : findings.slice(0, ANALYTICS_PRIMARY_FINDINGS_LIMIT);
  els.analyticsFindingsList.innerHTML = visible
    .map(
      (item) => `
      <article class="analytics-finding severity-${item.severity}">
        <div class="analytics-finding-title">
          <span>${escapeHtml(item.title)}</span>
          <span class="risk-chip ${item.severity === "high" ? "risk" : item.severity === "medium" ? "attention" : "normal"}">${
            item.severity === "high" ? "Высокий приоритет" : item.severity === "medium" ? "Средний приоритет" : "Наблюдение"
          }</span>
        </div>
        <div><strong>Факт:</strong> ${escapeHtml(item.fact)}</div>
        <div><strong>Интерпретация:</strong> ${escapeHtml(item.interpretation)}</div>
        ${item.recommendation ? `<div><strong>Рекомендация:</strong> ${escapeHtml(item.recommendation)}</div>` : ""}
      </article>
    `
    )
    .join("");

  if (findings.length > ANALYTICS_PRIMARY_FINDINGS_LIMIT) {
    els.analyticsToggleFindingsBtn.classList.remove("hidden");
    els.analyticsToggleFindingsBtn.textContent = showAll ? "Показать только ключевые" : "Показать все выводы";
  } else {
    els.analyticsToggleFindingsBtn.classList.add("hidden");
  }
}

function renderRecommendations(recommendations) {
  if (!els.analyticsRecommendationsList) return;
  if (!recommendations || recommendations.length === 0) {
    els.analyticsRecommendationsList.innerHTML = `<li>Критичных рекомендаций нет, продолжайте регулярный мониторинг ДДС.</li>`;
    return;
  }
  els.analyticsRecommendationsList.innerHTML = recommendations.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function exportAnalyticsCsv() {
  if (!requirePermission("analytics.export", "Недостаточно прав: роль не позволяет выгружать аналитику.")) return;
  const snapshot = state.analytics.latest;
  if (!snapshot) {
    if (els.analyticsStatus) els.analyticsStatus.textContent = "Сначала сформируйте аналитику.";
    return;
  }

  const lines = [];
  lines.push(["Раздел", "Показатель", "Значение", "Комментарий"]);
  lines.push(["Сводка", "Остаток на начало", formatNumberForCsv(snapshot.summary.openingBalance), ""]);
  lines.push(["Сводка", "Поступления", formatNumberForCsv(snapshot.summary.inflow), ""]);
  lines.push(["Сводка", "Выплаты", formatNumberForCsv(snapshot.summary.outflow), ""]);
  lines.push(["Сводка", "Чистый поток", formatNumberForCsv(snapshot.summary.net), ""]);
  lines.push(["Сводка", "Остаток на конец", formatNumberForCsv(snapshot.summary.closingBalance), ""]);
  lines.push(["Сводка", "Операционный поток", formatNumberForCsv(snapshot.summary.operatingFlow), ""]);
  lines.push(["Сводка", "Инвестиционный поток", formatNumberForCsv(snapshot.summary.investingFlow), ""]);
  lines.push(["Сводка", "Финансовый поток", formatNumberForCsv(snapshot.summary.financingFlow), ""]);
  lines.push(["Сводка", "Безопасный остаток", formatNumberForCsv(snapshot.safeBalance), ""]);

  snapshot.forecast.rows.forEach((row) => {
    lines.push([
      "Прогноз",
      row.period,
      formatNumberForCsv(row.closingBalance),
      `In:${formatNumberForCsv(row.inflow)} Out:${formatNumberForCsv(row.outflow)} ${row.statusLabel}`,
    ]);
  });

  snapshot.findings.forEach((item) => {
    lines.push(["Вывод", item.title, item.fact, `${item.interpretation} ${item.recommendation || ""}`.trim()]);
  });

  snapshot.recommendations.forEach((item) => {
    lines.push(["Рекомендация", "", "", item]);
  });

  const csv = lines
    .map((line) => line.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(";"))
    .join("\n");
  triggerDownload(new Blob([csv], { type: "text/csv;charset=utf-8;" }), "dds-analytics.csv");
}

function mapAnalyticsScenarioToPlanScenario(scenario) {
  const normalized = normalizeAnalyticsScenario(scenario);
  if (normalized === "optimistic") return "optimistic";
  if (normalized === "conservative") return "conservative";
  return "base";
}

function computeAverageMonthlyOutflow(allOps, lookbackMonths, anchorDate) {
  const months = normalizeIntInRange(lookbackMonths, 3, 1, 12);
  const monthRows = aggregateByMonth(
    (allOps || []).filter((op) => op.dateObj <= endOfDay(anchorDate) && classifyCashflowActivity(op.activity) !== "technical")
  );
  const recent = monthRows.slice(-months);
  if (recent.length === 0) return 0;
  return recent.reduce((sum, row) => sum + (Number(row.outAmount) || 0), 0) / recent.length;
}

function normalizeAnalyticsCompareMode(value) {
  const mode = String(value || "analog").trim().toLowerCase();
  return ["analog", "month", "week", "quarter"].includes(mode) ? mode : "analog";
}

function normalizeAnalyticsForecastMode(value) {
  const mode = String(value || "plan").trim().toLowerCase();
  return ["plan", "stat"].includes(mode) ? mode : "plan";
}

function normalizeAnalyticsScenario(value) {
  const scenario = String(value || "base").trim().toLowerCase();
  return ["base", "optimistic", "conservative"].includes(scenario) ? scenario : "base";
}

function normalizeSafeBalanceMode(value) {
  const mode = String(value || "fixed").trim().toLowerCase();
  return ["fixed", "percent_outflow"].includes(mode) ? mode : "fixed";
}

function normalizeIntInRange(value, fallback, min, max) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.min(max, Math.max(min, Math.round(numeric)));
}

function normalizeMoneyInput(value, fallback) {
  const amount = parseAmount(String(value || ""));
  return Number.isFinite(amount) ? amount : fallback;
}

function bindBankEvents() {
  els.legalEntityForm.addEventListener("submit", onAddLegalEntity);
  els.bankAccountForm.addEventListener("submit", onAddBankAccount);
  els.banksSearch.addEventListener("input", () => {
    state.banksUi.search = String(els.banksSearch.value || "").trim();
    renderBanksTab();
  });
  els.banksStatusFilter.addEventListener("change", () => {
    state.banksUi.status = String(els.banksStatusFilter.value || "active");
    renderBanksTab();
  });
  els.banksDataFilter.addEventListener("change", () => {
    state.banksUi.data = String(els.banksDataFilter.value || "all");
    renderBanksTab();
  });
  els.banksExpandWithData.addEventListener("click", () => {
    const next = {};
    state.banks.accounts.forEach((account) => {
      if (account.summary && account.status !== "DELETED") {
        next[account.id] = true;
      }
    });
    state.banksUi.expandedByAccountId = next;
    renderBanksTab();
  });
  els.banksCollapseAll.addEventListener("click", () => {
    state.banksUi.expandedByAccountId = {};
    renderBanksTab();
  });

  els.bankFolderEntitySelect?.addEventListener("change", () => {
    state.banksUi.folderImport.legalEntityId = Number(els.bankFolderEntitySelect.value) || 0;
    renderBankFolderImportPreview();
  });
  els.bankFolderParserProfile?.addEventListener("change", () => {
    state.banksUi.folderImport.parserProfile = String(els.bankFolderParserProfile.value || "auto");
  });
  els.bankFolderAnalyzeBtn?.addEventListener("click", analyzeBankFolderImportDraft);
  els.bankFolderApplyBtn?.addEventListener("click", applyBankFolderImportDraft);
  els.bankFolderClearBtn?.addEventListener("click", clearBankFolderImportDraft);

  els.bankFolderPreviewBody?.addEventListener("change", (event) => {
    const rowEl = event.target.closest("[data-folder-row]");
    if (!rowEl) return;
    const rowIndex = Number(rowEl.dataset.folderRow);
    if (!Number.isFinite(rowIndex) || rowIndex < 0) return;
    const item = state.banksUi.folderImport.items[rowIndex];
    if (!item) return;

    const includeCheckbox = event.target.closest("input[data-folder-include]");
    if (includeCheckbox) {
      item.include = Boolean(includeCheckbox.checked);
      renderBankFolderImportPreview();
      return;
    }

    const accountSelect = event.target.closest("select[data-folder-account-id]");
    if (accountSelect) {
      item.accountId = Number(accountSelect.value) || 0;
      item.ready = item.accountId > 0 && Boolean(item.month) && item.operationsCount > 0;
      item.status = item.ready
        ? "Готово к сохранению"
        : item.accountId <= 0
          ? "Требуется выбрать счет"
          : !item.month
            ? "Требуется выбрать месяц"
            : "Нет операций за выбранный месяц";
      renderBankFolderImportPreview();
      return;
    }

    const monthInput = event.target.closest("input[data-folder-month]");
    if (monthInput) {
      item.month = normalizeMonthKey(monthInput.value);
      item.monthTransactions = item.month ? extractTransactionsForMonth(item.transactions, item.month) : [];
      const summary = summarizeStatementMovement(item.monthTransactions);
      item.operationsCount = item.monthTransactions.length;
      item.inflow = summary.inflow;
      item.outflow = summary.outflow;
      item.ready = item.accountId > 0 && Boolean(item.month) && item.operationsCount > 0;
      item.status = item.ready
        ? "Готово к сохранению"
        : item.accountId <= 0
          ? "Требуется выбрать счет"
          : !item.month
            ? "Требуется выбрать месяц"
            : "Нет операций за выбранный месяц";
      renderBankFolderImportPreview();
    }
  });

  els.banksEntityBlocks.addEventListener("change", (event) => {
    const parserSelect = event.target.closest("select[data-bank-parser]");
    if (parserSelect) {
      const accountId = Number(parserSelect.dataset.accountId);
      const parserProfile = String(parserSelect.value || "auto");
      setBankParserProfile(accountId, parserProfile);
      return;
    }

    const manualOpeningMonthInput = event.target.closest("input[data-bank-opening-month]");
    if (manualOpeningMonthInput) {
      const accountId = Number(manualOpeningMonthInput.dataset.accountId);
      const selectedMonth = normalizeMonthKey(manualOpeningMonthInput.value);
      const account = state.banks.accounts.find((item) => item.id === accountId);
      if (!account) return;
      const amountInput = els.banksEntityBlocks.querySelector(`input[data-bank-opening-amount][data-account-id='${accountId}']`);
      if (!amountInput) return;
      const existing = getManualOpeningBalance(account, selectedMonth);
      amountInput.value = Number.isFinite(existing) ? formatNumberForInput(existing) : "";
      return;
    }

    const input = event.target.closest("input[data-bank-upload='1']");
    if (!input) return;

    const accountId = Number(input.dataset.accountId);
    const [file] = input.files || [];
    if (!file) return;

    const monthInput = els.banksEntityBlocks.querySelector(`input[data-bank-month='${accountId}']`);
    const selectedMonth = String(monthInput?.value || "").trim();
    const parserInput = els.banksEntityBlocks.querySelector(`select[data-bank-parser][data-account-id='${accountId}']`);
    const parserProfile = String(parserInput?.value || "auto");

    if (!selectedMonth) {
      alert("Выберите месяц, за который загружается выписка.");
      input.value = "";
      return;
    }

    uploadBankStatement(accountId, selectedMonth, file, parserProfile);
  });

  els.banksEntityBlocks.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-bank-action]");
    if (!button) return;

    const accountId = Number(button.dataset.accountId);
    const action = button.dataset.bankAction;

    if (action === "delete") {
      deleteBankAccountSafely(accountId);
      return;
    }

    if (action === "toggle-details") {
      const expanded = Boolean(state.banksUi.expandedByAccountId[accountId]);
      if (expanded) {
        delete state.banksUi.expandedByAccountId[accountId];
      } else {
        state.banksUi.expandedByAccountId[accountId] = true;
      }
      renderBanksTab();
      return;
    }

    if (action === "restore") {
      restoreBankAccount(accountId);
      return;
    }

    if (action === "remove-month") {
      const month = String(button.dataset.month || "").trim();
      removeMonthlyStatement(accountId, month);
      return;
    }

    if (action === "save-template") {
      const delimiterInput = els.banksEntityBlocks.querySelector(
        `select[data-bank-template-delimiter][data-account-id='${accountId}']`
      );
      const dateInput = els.banksEntityBlocks.querySelector(
        `input[data-bank-template-date][data-account-id='${accountId}']`
      );
      const altDateInput = els.banksEntityBlocks.querySelector(
        `input[data-bank-template-alt-date][data-account-id='${accountId}']`
      );
      const amountInput = els.banksEntityBlocks.querySelector(
        `input[data-bank-template-amount][data-account-id='${accountId}']`
      );
      const debitInput = els.banksEntityBlocks.querySelector(
        `input[data-bank-template-debit][data-account-id='${accountId}']`
      );
      const creditInput = els.banksEntityBlocks.querySelector(
        `input[data-bank-template-credit][data-account-id='${accountId}']`
      );
      const signInput = els.banksEntityBlocks.querySelector(
        `input[data-bank-template-sign][data-account-id='${accountId}']`
      );
      const balanceInput = els.banksEntityBlocks.querySelector(
        `input[data-bank-template-balance][data-account-id='${accountId}']`
      );
      setBankStatementTemplate(accountId, {
        delimiter: String(delimiterInput?.value || "auto"),
        date: String(dateInput?.value || ""),
        altDate: String(altDateInput?.value || ""),
        amount: String(amountInput?.value || ""),
        debit: String(debitInput?.value || ""),
        credit: String(creditInput?.value || ""),
        sign: String(signInput?.value || ""),
        balance: String(balanceInput?.value || ""),
      });
      return;
    }

    if (action === "reset-template") {
      resetBankStatementTemplate(accountId);
      return;
    }

    if (action === "save-opening") {
      const monthInput = els.banksEntityBlocks.querySelector(`input[data-bank-opening-month][data-account-id='${accountId}']`);
      const amountInput = els.banksEntityBlocks.querySelector(`input[data-bank-opening-amount][data-account-id='${accountId}']`);
      const month = String(monthInput?.value || "").trim();
      const amount = String(amountInput?.value || "").trim();
      setManualOpeningBalance(accountId, month, amount);
      return;
    }

    if (action === "clear-opening") {
      const monthInput = els.banksEntityBlocks.querySelector(`input[data-bank-opening-month][data-account-id='${accountId}']`);
      const month = String(monthInput?.value || "").trim();
      clearManualOpeningBalance(accountId, month);
    }
  });
}

function onAddLegalEntity(event) {
  event.preventDefault();
  if (!requirePermission("banks.structure", "Недостаточно прав: только Админ может добавлять юрлица.")) return;

  const name = String(els.legalEntityNameInput.value || "").trim();
  if (!name) {
    alert("Введите название юрлица.");
    return;
  }

  state.banks.legalEntities.push({
    id: getNextId(state.banks.legalEntities),
    name,
  });

  logChange("LEGAL_ENTITY_ADDED", "Банки", `Добавлено юрлицо "${name}"`);
  els.legalEntityNameInput.value = "";
  persistBanksAndRender();
}

function onAddBankAccount(event) {
  event.preventDefault();
  if (!requirePermission("banks.structure", "Недостаточно прав: только Админ может добавлять счета.")) return;

  const name = String(els.bankAccountNameInput.value || "").trim();
  const legalEntityId = Number(els.bankAccountEntitySelect.value);

  if (!name) {
    alert("Введите название счета.");
    return;
  }

  if (!legalEntityId) {
    alert("Выберите юрлицо.");
    return;
  }

  state.banks.accounts.push({
    id: getNextId(state.banks.accounts),
    legalEntityId,
    name,
    parserProfile: "auto",
    statementTemplate: createDefaultBankStatementTemplate(),
    status: "ACTIVE",
    fileName: "",
    manualOpeningBalances: {},
    monthlyStatements: {},
    transactions: [],
    summary: null,
  });

  logChange("BANK_ACCOUNT_ADDED", "Банки", `Добавлен счет "${name}"`);
  els.bankAccountNameInput.value = "";
  persistBanksAndRender();
}

function createDefaultBankStatementTemplate() {
  return {
    delimiter: "auto",
    date: "",
    altDate: "",
    amount: "",
    debit: "",
    credit: "",
    sign: "",
    balance: "",
  };
}

function normalizeTemplateDelimiter(value) {
  const raw = String(value ?? "auto");
  if (raw === "\t") return "tab";
  const normalized = raw.trim().toLowerCase();
  const allowed = new Set(BANK_TEMPLATE_DELIMITERS.map((item) => item.value));
  return allowed.has(normalized) ? normalized : "auto";
}

function templateDelimiterToChar(value) {
  const normalized = normalizeTemplateDelimiter(value);
  if (normalized === "tab") return "\t";
  return normalized;
}

function normalizeBankStatementTemplate(rawTemplate) {
  const fallback = createDefaultBankStatementTemplate();
  if (!rawTemplate || typeof rawTemplate !== "object") return fallback;
  return {
    delimiter: normalizeTemplateDelimiter(rawTemplate.delimiter),
    date: String(rawTemplate.date || "").trim(),
    altDate: String(rawTemplate.altDate || "").trim(),
    amount: String(rawTemplate.amount || "").trim(),
    debit: String(rawTemplate.debit || "").trim(),
    credit: String(rawTemplate.credit || "").trim(),
    sign: String(rawTemplate.sign || "").trim(),
    balance: String(rawTemplate.balance || "").trim(),
  };
}

function normalizeBankParserProfile(value) {
  const normalized = String(value || "auto").trim().toLowerCase();
  return BANK_PARSER_PROFILES.some((item) => item.value === normalized) ? normalized : "auto";
}

function readTextFileAsUtf8(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Не удалось прочитать файл."));
    reader.readAsText(file, "utf-8");
  });
}

function extractTransactionsForMonth(transactions, selectedMonth) {
  if (!selectedMonth) return [];
  return (transactions || [])
    .filter((tx) => {
      const primaryMonth = toMonthKey(tx.dateObj);
      const altMonth = toMonthKey(tx.altDateObj);
      return primaryMonth === selectedMonth || altMonth === selectedMonth;
    })
    .map((tx) => {
      const primaryMonth = toMonthKey(tx.dateObj);
      const altMonth = toMonthKey(tx.altDateObj);

      if (primaryMonth !== selectedMonth && altMonth === selectedMonth && tx.altDateObj) {
        return {
          ...tx,
          dateObj: tx.altDateObj,
        };
      }

      return tx;
    });
}

function summarizeStatementMovement(transactions) {
  const txs = transactions || [];
  const movementCount = txs.filter((tx) => Math.abs(Number(tx.amount) || 0) > 0.000001).length;
  const balanceCount = txs.filter((tx) => Number.isFinite(tx.balance)).length;
  const inflow = txs.filter((tx) => tx.amount > 0).reduce((sum, tx) => sum + tx.amount, 0);
  const outflow = txs.filter((tx) => tx.amount < 0).reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
  return { movementCount, balanceCount, inflow, outflow };
}

function detectDominantMonthFromTransactions(transactions) {
  const counts = new Map();

  (transactions || []).forEach((tx) => {
    const primaryMonth = toMonthKey(tx?.dateObj);
    const altMonth = toMonthKey(tx?.altDateObj);

    if (primaryMonth) {
      counts.set(primaryMonth, (counts.get(primaryMonth) || 0) + 1);
    }
    if (altMonth && altMonth !== primaryMonth) {
      counts.set(altMonth, (counts.get(altMonth) || 0) + 0.5);
    }
  });

  if (counts.size === 0) return "";

  return [...counts.entries()]
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return b[0].localeCompare(a[0]);
    })[0][0];
}

function detectMonthKeyFromFileName(fileName) {
  const raw = String(fileName || "");
  const compactMatch = raw.match(/\b(20\d{2})(0[1-9]|1[0-2])\b/);
  if (compactMatch) {
    return `${compactMatch[1]}-${compactMatch[2]}`;
  }

  const separatedMatch = raw.match(/\b(20\d{2})[-_. ](0[1-9]|1[0-2])\b/);
  if (separatedMatch) {
    return `${separatedMatch[1]}-${separatedMatch[2]}`;
  }

  return "";
}

function parseStatementWithBestProfile(text, selectedProfile, selectedMonth = "", template = null) {
  const profile = normalizeBankParserProfile(selectedProfile);
  const profilesToTry =
    profile === "auto" ? ["auto", "deutsche", "commerz", "sparkasse"] : [profile];

  let best = null;
  let lastError = null;

  profilesToTry.forEach((candidateProfile) => {
    try {
      const parsed = parseBankStatementCsv(text, candidateProfile, { selectedMonth, template });
      const movement = summarizeStatementMovement(parsed);
      const score = parsed.length * 2 + movement.movementCount * 4 + movement.balanceCount;
      if (!best || score > best.score) {
        best = {
          profile: candidateProfile,
          profileLabel: BANK_PARSER_PROFILES.find((item) => item.value === candidateProfile)?.label || candidateProfile,
          transactions: parsed,
          score,
        };
      }
    } catch (error) {
      lastError = error;
    }
  });

  if (!best) {
    throw lastError || new Error("Не удалось распознать формат CSV выписки.");
  }

  return best;
}

function guessAccountIdForFolderItem(fileName, profile, legalEntityId = 0) {
  const options = getFolderImportAccountOptions(legalEntityId);
  if (options.length === 0) return 0;

  const normalizedFileName = normalizeText(String(fileName || "").replace(/\.[^.]+$/, ""));
  if (normalizedFileName) {
    const byName = options.find((account) => normalizedFileName.includes(normalizeText(account.name)));
    if (byName) return byName.id;
  }

  if (profile && profile !== "auto") {
    const byProfile = options.filter((account) => normalizeBankParserProfile(account.parserProfile) === profile);
    if (byProfile.length === 1) return byProfile[0].id;
  }

  return options.length === 1 ? options[0].id : 0;
}

async function analyzeBankFolderImportDraft() {
  if (!requirePermission("banks.statement.upload", "Недостаточно прав: роль не позволяет загружать выписки.")) return;

  const selectedLegalEntityId = Number(els.bankFolderEntitySelect?.value) || 0;
  const selectedProfile = normalizeBankParserProfile(els.bankFolderParserProfile?.value || "auto");
  const files = Array.from(els.bankFolderInput?.files || [])
    .filter((file) => /\.csv$/i.test(String(file?.name || "")))
    .sort((a, b) =>
      String(a.webkitRelativePath || a.name || "").localeCompare(String(b.webkitRelativePath || b.name || ""), "ru")
    );

  if (files.length === 0) {
    alert("Выберите хотя бы один CSV-файл или папку с CSV.");
    return;
  }

  state.banksUi.folderImport.legalEntityId = selectedLegalEntityId;
  state.banksUi.folderImport.parserProfile = selectedProfile;
  state.banksUi.folderImport.statusText = `Анализ файлов: ${files.length}...`;
  state.banksUi.folderImport.items = [];
  renderBankFolderImportPreview();

  const items = [];
  for (const file of files) {
    const visibleFileName = String(file.webkitRelativePath || file.name || "");
    try {
      const text = await readTextFileAsUtf8(file);
      const preliminaryAccountId = guessAccountIdForFolderItem(file.name, selectedProfile, selectedLegalEntityId);
      const preliminaryTemplate =
        normalizeBankStatementTemplate(
          state.banks.accounts.find((account) => account.id === preliminaryAccountId)?.statementTemplate
        ) || createDefaultBankStatementTemplate();
      const parsed = parseStatementWithBestProfile(text, selectedProfile, "", preliminaryTemplate);
      const detectedMonth = detectDominantMonthFromTransactions(parsed.transactions) || detectMonthKeyFromFileName(visibleFileName);
      const monthTransactions = detectedMonth ? extractTransactionsForMonth(parsed.transactions, detectedMonth) : [];
      const movement = summarizeStatementMovement(monthTransactions);
      const accountId = guessAccountIdForFolderItem(file.name, parsed.profile, selectedLegalEntityId);
      const ready = Boolean(detectedMonth) && accountId > 0 && monthTransactions.length > 0;

      items.push({
        include: true,
        fileName: visibleFileName,
        originalFileName: String(file.name || ""),
        parserProfile: parsed.profile,
        profileLabel: parsed.profileLabel,
        accountId,
        month: detectedMonth,
        transactions: parsed.transactions,
        monthTransactions,
        operationsCount: monthTransactions.length,
        inflow: movement.inflow,
        outflow: movement.outflow,
        ready,
        error: false,
        status: ready
          ? "Готово к сохранению"
          : accountId <= 0
            ? "Не удалось подобрать счет"
            : "Не удалось определить месяц",
      });
    } catch (error) {
      items.push({
        include: false,
        fileName: visibleFileName,
        originalFileName: String(file.name || ""),
        parserProfile: selectedProfile,
        profileLabel: BANK_PARSER_PROFILES.find((item) => item.value === selectedProfile)?.label || selectedProfile,
        accountId: 0,
        month: "",
        transactions: [],
        monthTransactions: [],
        operationsCount: 0,
        inflow: 0,
        outflow: 0,
        ready: false,
        error: true,
        status: `Ошибка: ${error.message}`,
      });
    }
  }

  const readyCount = items.filter((item) => item.ready).length;
  const errorCount = items.filter((item) => item.error).length;
  state.banksUi.folderImport.items = items;
  state.banksUi.folderImport.statusText = "";
  if (readyCount === 0 && errorCount > 0) {
    state.banksUi.folderImport.statusText = `Ошибки в файлах: ${errorCount}. Проверьте строки предпросмотра.`;
  }
  renderBankFolderImportPreview();
}

function clearBankFolderImportDraft() {
  if (!requirePermission("banks.statement.upload", "Недостаточно прав: роль не позволяет менять черновик импорта.")) return;
  state.banksUi.folderImport.items = [];
  state.banksUi.folderImport.statusText = "Черновик импорта очищен.";
  if (els.bankFolderInput) {
    els.bankFolderInput.value = "";
  }
  renderBankFolderImportPreview();
}

function applyBankFolderImportDraft() {
  if (!requirePermission("banks.statement.upload", "Недостаточно прав: роль не позволяет загружать выписки.")) return;

  const selected = (state.banksUi.folderImport.items || []).filter((item) => item.include);
  if (selected.length === 0) {
    alert("Нет выбранных файлов для сохранения.");
    return;
  }

  const ready = selected.filter((item) => item.ready && !item.error && item.accountId > 0 && item.month);
  if (ready.length === 0) {
    alert("Нет готовых строк для сохранения. Проверьте счет/месяц в предпросмотре.");
    return;
  }

  const confirm = window.confirm(`Сохранить ${ready.length} выписок в банки?`);
  if (!confirm) return;

  let savedCount = 0;
  let invalidCount = 0;
  ready.forEach((item) => {
    const monthTransactions = extractTransactionsForMonth(item.transactions, item.month);
    const movement = summarizeStatementMovement(monthTransactions);
    if (monthTransactions.length === 0 || (movement.movementCount === 0 && movement.balanceCount === 0)) {
      invalidCount += 1;
      return;
    }

    state.banks.accounts = state.banks.accounts.map((account) =>
      account.id !== item.accountId
        ? account
        : upsertMonthlyStatement(account, item.month, {
            fileName: item.originalFileName || item.fileName,
            transactions: monthTransactions,
          })
    );

    const accountName = state.banks.accounts.find((account) => account.id === item.accountId)?.name || `Счет ${item.accountId}`;
    logChange(
      "BANK_STATEMENT_UPLOADED",
      "Банки",
      `${accountName}; месяц ${item.month}; файл ${item.originalFileName || item.fileName}; операций ${monthTransactions.length}; пакетный импорт`
    );
    savedCount += 1;
  });

  if (savedCount === 0) {
    alert("Ни один файл не сохранен: проверьте выбранные счета/месяцы и корректность выписок.");
    renderBankFolderImportPreview();
    return;
  }

  const skipped = selected.length - savedCount;
  state.banksUi.folderImport.items = [];
  state.banksUi.folderImport.statusText = `Импорт завершен. Сохранено: ${savedCount}. Пропущено: ${skipped}.`;
  if (els.bankFolderInput) {
    els.bankFolderInput.value = "";
  }

  if (invalidCount > 0) {
    alert(`Часть строк пропущена (${invalidCount}) из-за отсутствия распознанных операций/остатков.`);
  }
  persistBanksAndRender();
}

function uploadBankStatement(accountId, selectedMonth, file, parserProfile = "auto") {
  if (!requirePermission("banks.statement.upload", "Недостаточно прав: роль не позволяет загружать выписки.")) return;
  const account = state.banks.accounts.find((item) => item.id === accountId);
  const statementTemplate = normalizeBankStatementTemplate(account?.statementTemplate);

  const fileName = String(file?.name || "");
  const lowerName = fileName.toLowerCase();
  const looksLikeCsv = lowerName.endsWith(".csv");
  if (!looksLikeCsv) {
    alert("Загрузите CSV-файл выписки. Формат .numbers не поддерживается для импорта.");
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const transactions = parseBankStatementCsv(String(reader.result || ""), parserProfile, {
        selectedMonth,
        template: statementTemplate,
      });
      const monthTransactions = extractTransactionsForMonth(transactions, selectedMonth);

      if (monthTransactions.length === 0) {
        alert(`В файле нет операций за месяц ${selectedMonth}. Проверьте выбранный месяц.`);
        return;
      }

      const { movementCount, balanceCount } = summarizeStatementMovement(monthTransactions);
      if (movementCount === 0 && balanceCount === 0) {
        alert(
          "Не удалось распознать суммы и остатки в выписке. Проверьте, что это именно CSV-экспорт (не .numbers), и попробуйте другой профиль банка."
        );
        return;
      }

      state.banks.accounts = state.banks.accounts.map((account) =>
        account.id !== accountId
          ? account
          : upsertMonthlyStatement(account, selectedMonth, {
              fileName: file.name,
              transactions: monthTransactions,
            })
      );

      const accountName = state.banks.accounts.find((item) => item.id === accountId)?.name || `Счет ${accountId}`;
      logChange(
        "BANK_STATEMENT_UPLOADED",
        "Банки",
        `${accountName}; месяц ${selectedMonth}; файл ${file.name}; операций ${monthTransactions.length}`
      );
      persistBanksAndRender();
    } catch (error) {
      alert(`Ошибка загрузки выписки: ${error.message}`);
    }
  };

  reader.onerror = () => {
    alert("Не удалось прочитать файл выписки.");
  };

  reader.readAsText(file, "utf-8");
}

function setBankParserProfile(accountId, parserProfile) {
  if (!requirePermission("banks.statement.profile", "Недостаточно прав: роль не позволяет менять профиль банка.")) return;
  const normalizedProfile = BANK_PARSER_PROFILES.some((item) => item.value === parserProfile) ? parserProfile : "auto";
  const account = state.banks.accounts.find((item) => item.id === accountId);
  if (!account) return;
  if (String(account.parserProfile || "auto") === normalizedProfile) return;
  state.banks.accounts = state.banks.accounts.map((account) =>
    account.id === accountId ? { ...account, parserProfile: normalizedProfile } : account
  );
  logChange("BANK_PROFILE_CHANGED", "Банки", `${account.name}: профиль "${normalizedProfile}"`);
  persistBanksAndRender();
}

function setBankStatementTemplate(accountId, rawTemplate) {
  if (!requirePermission("banks.statement.profile", "Недостаточно прав: роль не позволяет менять шаблон банка.")) return;
  const account = state.banks.accounts.find((item) => item.id === accountId);
  if (!account) return;
  const nextTemplate = normalizeBankStatementTemplate(rawTemplate);
  const prevTemplate = normalizeBankStatementTemplate(account.statementTemplate);
  const hasChanges =
    JSON.stringify(prevTemplate) !== JSON.stringify(nextTemplate);
  if (!hasChanges) return;

  state.banks.accounts = state.banks.accounts.map((item) =>
    item.id === accountId ? { ...item, statementTemplate: nextTemplate } : item
  );

  const brief = [
    nextTemplate.delimiter !== "auto"
      ? `разделитель=${nextTemplate.delimiter === "tab" ? "TAB" : nextTemplate.delimiter}`
      : "",
    nextTemplate.date ? `дата=${nextTemplate.date}` : "",
    nextTemplate.amount ? `сумма=${nextTemplate.amount}` : "",
    nextTemplate.debit ? `дебет=${nextTemplate.debit}` : "",
    nextTemplate.credit ? `кредит=${nextTemplate.credit}` : "",
    nextTemplate.balance ? `остаток=${nextTemplate.balance}` : "",
  ]
    .filter(Boolean)
    .join(", ");
  logChange("BANK_TEMPLATE_SAVED", "Банки", `${account.name}: шаблон обновлен${brief ? ` (${brief})` : ""}`);
  persistBanksAndRender();
}

function resetBankStatementTemplate(accountId) {
  if (!requirePermission("banks.statement.profile", "Недостаточно прав: роль не позволяет менять шаблон банка.")) return;
  const account = state.banks.accounts.find((item) => item.id === accountId);
  if (!account) return;
  const confirmed = window.confirm(`Сбросить шаблон колонок у счета "${account.name}"?`);
  if (!confirmed) return;

  state.banks.accounts = state.banks.accounts.map((item) =>
    item.id === accountId ? { ...item, statementTemplate: createDefaultBankStatementTemplate() } : item
  );
  logChange("BANK_TEMPLATE_RESET", "Банки", `${account.name}: шаблон сброшен`);
  persistBanksAndRender();
}

function setManualOpeningBalance(accountId, monthKey, amountRaw) {
  if (!requirePermission("banks.opening.manage", "Недостаточно прав: роль не позволяет менять ручные остатки.")) return;
  const normalizedMonth = normalizeMonthKey(monthKey);
  if (!normalizedMonth) {
    alert("Выберите месяц для ручного остатка.");
    return;
  }

  const amount = parseAmount(amountRaw);
  if (!Number.isFinite(amount)) {
    alert("Введите корректную сумму остатка (например: 12000,50).");
    return;
  }

  state.banks.accounts = state.banks.accounts.map((account) => {
    if (account.id !== accountId) return account;
    const manualOpeningBalances = {
      ...(account.manualOpeningBalances || {}),
      [normalizedMonth]: amount,
    };

    return rebuildAccountFromMonthlyStatements({
      ...account,
      manualOpeningBalances,
    }, account.monthlyStatements || {});
  });

  const accountName = state.banks.accounts.find((item) => item.id === accountId)?.name || `Счет ${accountId}`;
  logChange("BANK_OPENING_SET", "Банки", `${accountName}; ${normalizedMonth}: ${formatMoney(amount)}`);
  persistBanksAndRender();
}

function clearManualOpeningBalance(accountId, monthKey) {
  if (!requirePermission("banks.opening.manage", "Недостаточно прав: роль не позволяет менять ручные остатки.")) return;
  const normalizedMonth = normalizeMonthKey(monthKey);
  if (!normalizedMonth) {
    alert("Выберите месяц для очистки ручного остатка.");
    return;
  }

  state.banks.accounts = state.banks.accounts.map((account) => {
    if (account.id !== accountId) return account;
    const manualOpeningBalances = { ...(account.manualOpeningBalances || {}) };
    if (!(normalizedMonth in manualOpeningBalances)) return account;
    delete manualOpeningBalances[normalizedMonth];

    return rebuildAccountFromMonthlyStatements({
      ...account,
      manualOpeningBalances,
    }, account.monthlyStatements || {});
  });

  const accountName = state.banks.accounts.find((item) => item.id === accountId)?.name || `Счет ${accountId}`;
  logChange("BANK_OPENING_CLEARED", "Банки", `${accountName}; ${normalizedMonth}`);
  persistBanksAndRender();
}

function upsertMonthlyStatement(account, monthKey, payload) {
  const normalizedMonth = normalizeMonthKey(monthKey);
  if (!normalizedMonth) return account;

  const monthlyStatements = {
    ...(account.monthlyStatements || {}),
    [normalizedMonth]: {
      month: normalizedMonth,
      fileName: String(payload.fileName || ""),
      transactions: payload.transactions || [],
      uploadedAt: new Date().toISOString(),
    },
  };

  const mergedTransactions = Object.values(monthlyStatements).flatMap((statement) => statement.transactions || []);
  const summary = summarizeBankTransactions(mergedTransactions, account.manualOpeningBalances || {});

  return {
    ...account,
    fileName: String(payload.fileName || account.fileName || ""),
    monthlyStatements,
    transactions: mergedTransactions,
    summary,
  };
}

function rebuildAccountFromMonthlyStatements(account, monthlyStatements) {
  const mergedTransactions = Object.values(monthlyStatements).flatMap((statement) => statement.transactions || []);
  const summary = summarizeBankTransactions(mergedTransactions, account.manualOpeningBalances || {});
  const latestLoadedMonth = Object.keys(monthlyStatements).sort((a, b) => b.localeCompare(a))[0] || "";
  const latestStatement = latestLoadedMonth ? monthlyStatements[latestLoadedMonth] : null;

  return {
    ...account,
    monthlyStatements,
    transactions: mergedTransactions,
    summary,
    fileName: String(latestStatement?.fileName || ""),
  };
}

function removeMonthlyStatement(accountId, monthKey) {
  if (!requirePermission("banks.statement.removeMonth", "Недостаточно прав: роль не позволяет удалять месяцы выписок.")) return;
  const normalizedMonth = normalizeMonthKey(monthKey);
  if (!normalizedMonth) return;

  const account = state.banks.accounts.find((item) => item.id === accountId);
  if (!account || account.status === "DELETED") return;
  if (!account.monthlyStatements || !account.monthlyStatements[normalizedMonth]) return;

  const firstConfirm = window.confirm(
    `Удалить выписку за ${normalizedMonth} у счета "${account.name}"? Это действие удалит только этот месяц.`
  );
  if (!firstConfirm) return;

  const phrase = window.prompt(`Для подтверждения введите: УДАЛИТЬ ${normalizedMonth}`);
  if (phrase !== `УДАЛИТЬ ${normalizedMonth}`) {
    alert("Удаление отменено: подтверждение не совпало.");
    return;
  }

  const finalConfirm = window.confirm(`Точно удалить месяц ${normalizedMonth}? Это действие нельзя отменить автоматически.`);
  if (!finalConfirm) return;

  state.banks.accounts = state.banks.accounts.map((item) => {
    if (item.id !== accountId) return item;

    const nextStatements = { ...(item.monthlyStatements || {}) };
    delete nextStatements[normalizedMonth];
    return rebuildAccountFromMonthlyStatements(item, nextStatements);
  });

  logChange("BANK_MONTH_REMOVED", "Банки", `${account.name}; удален месяц ${normalizedMonth}`);
  persistBanksAndRender();
}

function deleteBankAccountSafely(accountId) {
  if (!requirePermission("banks.account.status", "Недостаточно прав: только Админ может удалять банки.")) return;
  const account = state.banks.accounts.find((item) => item.id === accountId);
  if (!account || account.status === "DELETED") return;

  const stepOne = window.confirm(
    `Удалить банк "${account.name}" из активных? Он пропадет из расчетов, но его можно восстановить.`
  );
  if (!stepOne) return;

  const phrase = window.prompt(`Для подтверждения введите УДАЛИТЬ`);
  if (String(phrase || "").trim().toUpperCase() !== "УДАЛИТЬ") {
    alert("Удаление отменено: фраза подтверждения не совпала.");
    return;
  }

  const stepThree = window.confirm(`Последнее подтверждение: точно удалить "${account.name}"?`);
  if (!stepThree) return;

  state.banks.accounts = state.banks.accounts.map((item) =>
    item.id === accountId ? { ...item, status: "DELETED" } : item
  );

  logChange("BANK_ACCOUNT_DELETED", "Банки", `Удален счет "${account.name}"`);
  persistBanksAndRender();
}

function restoreBankAccount(accountId) {
  if (!requirePermission("banks.account.status", "Недостаточно прав: только Админ может восстанавливать банки.")) return;
  const account = state.banks.accounts.find((item) => item.id === accountId);
  if (!account || account.status !== "DELETED") return;

  const confirmed = window.confirm(`Восстановить банк "${account.name}" в активные?`);
  if (!confirmed) return;

  state.banks.accounts = state.banks.accounts.map((item) =>
    item.id === accountId ? { ...item, status: "ACTIVE" } : item
  );

  logChange("BANK_ACCOUNT_RESTORED", "Банки", `Восстановлен счет "${account.name}"`);
  persistBanksAndRender();
}

function getBankStatementProfile(profileRaw) {
  const profile = String(profileRaw || "auto").toLowerCase();
  const base = {
    dateCandidates: [
      "дата",
      "date",
      "booking",
      "buchungstag",
      "buchungsdatum",
      "buchung",
      "wertstellung",
      "wert",
      "valuta",
      "valutadatum",
    ],
    altDateCandidates: ["wert", "wertstellung", "valuta", "valutadatum"],
    amountCandidates: ["сумма", "amount", "betrag", "umsatz", "umsatz (eur)", "betrag (eur)"],
    debitCandidates: ["списан", "debit", "расход", "выбыт", "soll", "lastschrift"],
    creditCandidates: ["зачисл", "credit", "приход", "поступ", "haben", "gutschrift"],
    signCandidates: ["s/h", "soll/haben", "haben/soll", "debit/credit", "credit/debit", "dr/cr", "cr/dr", "kennzeichen"],
    balanceCandidates: ["баланс", "остаток", "balance", "saldo", "kontostand", "kontostand alt", "kontostand neu"],
  };

  if (profile === "deutsche") {
    return {
      ...base,
      dateCandidates: ["buchungstag", "wertstellung", "wert", "date", ...base.dateCandidates],
      amountCandidates: ["betrag", "umsatz", ...base.amountCandidates],
      balanceCandidates: ["kontostand", "saldo", ...base.balanceCandidates],
    };
  }

  if (profile === "commerz") {
    return {
      ...base,
      dateCandidates: ["buchungstag", "valuta", "buchungsdatum", ...base.dateCandidates],
      amountCandidates: ["umsatz", "betrag", ...base.amountCandidates],
      debitCandidates: ["soll", "debit", ...base.debitCandidates],
      creditCandidates: ["haben", "credit", ...base.creditCandidates],
    };
  }

  if (profile === "sparkasse") {
    return {
      ...base,
      dateCandidates: ["buchungstag", "wertstellung", "valuta", ...base.dateCandidates],
      amountCandidates: ["umsatz", "betrag", ...base.amountCandidates],
      balanceCandidates: ["saldo", "kontostand", ...base.balanceCandidates],
    };
  }

  return base;
}

function parseBankStatementCsv(text, parserProfile = "auto", options = {}) {
  const cleanText = text.replace(/^\uFEFF/, "").trim();
  if (!cleanText) throw new Error("CSV выписки пустой.");

  const template = normalizeBankStatementTemplate(options.template);
  const profile = getBankStatementProfile(parserProfile);
  const csvCandidate = parseCsvWithBestDelimiter(cleanText, profile, template.delimiter);
  const rows = csvCandidate.rows;
  const monthHint = getMonthHintFromSelectedMonth(options.selectedMonth);

  if (rows.length < 2) throw new Error("В выписке нет данных.");

  const dateCandidates = buildColumnCandidates(template.date, profile.dateCandidates);
  const altDateCandidates = buildColumnCandidates(template.altDate, profile.altDateCandidates);
  const amountCandidates = buildColumnCandidates(template.amount, profile.amountCandidates);
  const debitCandidates = buildColumnCandidates(template.debit, profile.debitCandidates);
  const creditCandidates = buildColumnCandidates(template.credit, profile.creditCandidates);
  const signCandidates = buildColumnCandidates(template.sign, profile.signCandidates);
  const balanceCandidates = buildColumnCandidates(template.balance, profile.balanceCandidates);
  const {
    headerRowIndex,
    idxDate,
    idxAmount,
    idxDebit,
    idxCredit,
    idxSign,
    idxBalance,
    idxAltDate,
  } = detectBankHeaderIndexes(rows, {
    dateCandidates,
    altDateCandidates,
    amountCandidates,
    debitCandidates,
    creditCandidates,
    signCandidates,
    balanceCandidates,
  });

  if (headerRowIndex === -1 || idxDate === -1) {
    throw new Error(
      `Не найдена колонка даты (например: Buchungstag/Wertstellung/Дата). Разделитель: ${
        csvCandidate.delimiterLabel
      }`
    );
  }

  if (idxAmount === -1 && idxDebit === -1 && idxCredit === -1) {
    throw new Error("Не найдена колонка суммы (например: Betrag/Umsatz/Soll-Haben).");
  }

  const parsedRows = rows
    .slice(headerRowIndex + 1)
    .map((cells, index) => {
      const rowText = normalizeText(cells.join(" "));
      const isBalanceSnapshot =
        rowText.includes("kontostand") ||
        rowText.includes("saldo") ||
        rowText.includes("anfangssaldo") ||
        rowText.includes("endsaldo");

      const primaryDateRaw = String(cells[idxDate] || "").trim();
      const altDateRaw = idxAltDate >= 0 ? String(cells[idxAltDate] || "").trim() : "";
      const primaryDateObj = parseFlexibleDateWithYearHint(primaryDateRaw, monthHint);
      const altDateObj = altDateRaw ? parseFlexibleDateWithYearHint(altDateRaw, monthHint) : null;

      let dateObj = primaryDateObj || altDateObj;
      if (!dateObj) {
        dateObj = findDateInCells(cells, monthHint);
      }
      if (!dateObj) return null;

      const amountRaw = idxAmount >= 0 ? String(cells[idxAmount] || "") : "";
      const debitRaw = idxDebit >= 0 ? String(cells[idxDebit] || "") : "";
      const creditRaw = idxCredit >= 0 ? String(cells[idxCredit] || "") : "";
      const signRaw = idxSign >= 0 ? String(cells[idxSign] || "") : "";

      let amount = null;
      if (idxAmount >= 0) {
        amount = parseAmount(amountRaw);
      }

      if (amount === null && (idxDebit >= 0 || idxCredit >= 0)) {
        amount = resolveSignedAmountFromDebitCreditCells(debitRaw, creditRaw);
      }

      if (Number.isFinite(amount)) {
        let signHint = resolveSignHintFromDebitCreditCells(debitRaw, creditRaw);
        if (signHint === 0) signHint = resolveSignHintFromSignCell(signRaw);
        if (signHint === 0) signHint = resolveSignHintFromAmountCell(amountRaw);
        if (signHint === 0) signHint = resolveSignHintFromRowText(cells);
        if (signHint !== 0) {
          amount = Math.abs(amount) * signHint;
        }
      }

      if (amount === null || !Number.isFinite(amount)) {
        if (isBalanceSnapshot) {
          amount = 0;
        } else {
          return null;
        }
      }

      let balance = idxBalance >= 0 ? parseAmount(String(cells[idxBalance] || "")) : null;
      if ((balance === null || !Number.isFinite(balance)) && isBalanceSnapshot) {
        balance = extractAmountFromCells(cells);
      }

      return {
        idx: index + headerRowIndex + 1,
        dateObj,
        altDateObj,
        amount,
        balance: Number.isFinite(balance) ? balance : null,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const byDate = a.dateObj.getTime() - b.dateObj.getTime();
      return byDate !== 0 ? byDate : a.idx - b.idx;
    });

  if (parsedRows.length === 0) {
    throw new Error(
      `Не удалось прочитать строки выписки: проверьте формат CSV и названия колонок. Профиль: ${parserProfile}, разделитель: ${csvCandidate.delimiterLabel}.`
    );
  }

  return parsedRows;
}

function buildColumnCandidates(primary, fallbackList) {
  const list = [];
  const primaryValue = String(primary || "").trim();
  if (primaryValue) {
    list.push(primaryValue);
  }
  (fallbackList || []).forEach((item) => {
    const value = String(item || "").trim();
    if (value) {
      list.push(value);
    }
  });
  return uniqueValues(list);
}

function summarizeBankTransactions(transactions, manualOpeningBalances = {}) {
  if (!transactions || transactions.length === 0) {
    return null;
  }

  const sorted = [...transactions].sort((a, b) => {
    const byDate = a.dateObj.getTime() - b.dateObj.getTime();
    return byDate !== 0 ? byDate : (a.idx || 0) - (b.idx || 0);
  });

  const latest = sorted[sorted.length - 1];
  const latestMonthKey = toMonthKey(latest.dateObj);
  const monthStart = parseFlexibleDate(`${latestMonthKey}-01`) || new Date(latest.dateObj.getFullYear(), latest.dateObj.getMonth(), 1);
  const monthlyRows = summarizeBankTransactionsByMonth(sorted, manualOpeningBalances || {});
  const latestMonthRow = monthlyRows.find((row) => row.month === latestMonthKey) || null;
  const latestOverallWithBalance = [...sorted].reverse().find((tx) => tx.balance !== null) || null;
  const openingBalance = latestMonthRow ? latestMonthRow.openingBalance : null;
  const monthEndBalance = latestMonthRow ? latestMonthRow.endBalance : null;
  const latestBalance = Number.isFinite(monthEndBalance)
    ? monthEndBalance
    : latestOverallWithBalance
      ? latestOverallWithBalance.balance
      : null;
  const inflow = latestMonthRow ? latestMonthRow.inflow : 0;
  const outflow = latestMonthRow ? latestMonthRow.outflow : 0;

  return {
    monthStartDate: monthStart,
    latestDate: latest.dateObj,
    openingBalance,
    monthEndBalance,
    latestBalance,
    inflow,
    outflow,
  };
}

function renderBanksTab() {
  refreshBankEntitySelect();
  refreshBankFolderEntitySelect();
  els.banksSearch.value = state.banksUi.search;
  els.banksStatusFilter.value = state.banksUi.status;
  els.banksDataFilter.value = state.banksUi.data;
  if (els.bankFolderParserProfile) {
    els.bankFolderParserProfile.value = state.banksUi.folderImport.parserProfile || "auto";
  }
  renderBankFolderImportPreview();

  const entitySummaries = state.banks.legalEntities.map((entity) => {
    const accounts = state.banks.accounts.filter((account) => account.legalEntityId === entity.id);
    const activeAccounts = accounts.filter((account) => account.status !== "DELETED");
    return {
      entity,
      accounts,
      activeAccounts,
      summary: summarizeEntity(activeAccounts),
    };
  });

  const visibleAccountIds = getVisibleBankAccountIds();
  renderBanksEntityBlocks(entitySummaries, visibleAccountIds);
  renderBanksEntitySummaryTable(entitySummaries);
  renderBanksGlobalSummary(entitySummaries);
  renderBanksFilterStatus(visibleAccountIds);
}

function renderBanksEntityBlocks(entitySummaries, visibleAccountIds) {
  const canChangeProfile = hasPermission("banks.statement.profile");
  const canUploadStatement = hasPermission("banks.statement.upload");
  const canManageOpening = hasPermission("banks.opening.manage");
  const canRemoveMonth = hasPermission("banks.statement.removeMonth");
  const canManageAccountStatus = hasPermission("banks.account.status");

  const hasAnyAccounts = entitySummaries.some(({ accounts }) => accounts.length > 0);
  const hasVisibleAccounts = [...visibleAccountIds].length > 0;

  if (!hasAnyAccounts) {
    els.banksEntityBlocks.innerHTML = `<div class="empty">Пока нет добавленных счетов.</div>`;
    return;
  }

  if (!hasVisibleAccounts) {
    els.banksEntityBlocks.innerHTML = `<div class="empty">Нет счетов, подходящих под текущие фильтры.</div>`;
    return;
  }

  els.banksEntityBlocks.innerHTML = entitySummaries
    .map(({ entity, accounts, summary }) => {
      const visibleAccounts = accounts.filter((account) => visibleAccountIds.has(account.id));
      if (visibleAccounts.length === 0) return "";

      const accountsHtml = visibleAccounts
        .map((account) => {
          const isDeleted = account.status === "DELETED";
          const isExpanded = Boolean(state.banksUi.expandedByAccountId[account.id]);
          const loadedMonths = getLoadedStatementMonths(account);
          const defaultUploadMonth = loadedMonths[0] || getCurrentMonthKey();
          const parserProfile = BANK_PARSER_PROFILES.some((item) => item.value === account.parserProfile)
            ? account.parserProfile
            : "auto";
          const statementTemplate = normalizeBankStatementTemplate(account.statementTemplate);
          const delimiterOptions = BANK_TEMPLATE_DELIMITERS.map(
            (item) =>
              `<option value="${escapeHtml(item.value)}" ${
                item.value === statementTemplate.delimiter ? "selected" : ""
              }>${escapeHtml(item.label)}</option>`
          ).join("");
          const defaultManualOpeningMonth = getDefaultManualOpeningMonth(account);
          const manualOpeningValue = getManualOpeningBalance(account, defaultManualOpeningMonth);
          const parserOptions = BANK_PARSER_PROFILES.map(
            (item) =>
              `<option value="${item.value}" ${item.value === parserProfile ? "selected" : ""}>${item.label}</option>`
          ).join("");
          const loadedMonthsHtml =
            loadedMonths.length === 0
              ? `<span class="month-pill empty">нет</span>`
              : loadedMonths
                  .map(
                    (month) => `<span class="month-pill">
                        ${month}
                        ${
                          isDeleted
                            ? ""
                            : canRemoveMonth
                              ? `<button type="button" class="inline-link danger" data-bank-action="remove-month" data-account-id="${account.id}" data-month="${month}">Удалить</button>`
                              : ""
                        }
                      </span>`
                  )
                  .join("");
          const status = account.summary
            ? `Файл: ${escapeHtml(account.fileName)}. Последняя дата: ${formatDate(account.summary.latestDate)}`
            : "Выписка не загружена.";
          const compactMetrics = account.summary
            ? `<div class="bank-quick-metrics">
                  <span>Начало: <strong>${formatMaybeMoney(account.summary.openingBalance)}</strong></span>
                  <span>Конец: <strong>${formatMaybeMoney(account.summary.monthEndBalance)}</strong></span>
                  <span>Поступления: <strong>${formatMoney(account.summary.inflow)}</strong></span>
                  <span>Выбытия: <strong>${formatMoney(account.summary.outflow)}</strong></span>
                </div>`
            : `<div class="bank-quick-metrics"><span>Нет загруженных данных</span></div>`;

          return `
            <article class="bank-account-card ${isExpanded ? "expanded" : "collapsed"}">
              <div class="bank-account-head">
                <div class="bank-account-title">
                  <div class="bank-account-name">${escapeHtml(account.name)}</div>
                  <div class="bank-account-inline-meta">
                    <span class="badge ${isDeleted ? "DELETE" : "ACTIVE"}">${isDeleted ? "Удален" : "Активен"}</span>
                    <span class="bank-status">Месяцев загружено: ${loadedMonths.length}</span>
                  </div>
                  ${compactMetrics}
                </div>
                <div class="bank-account-meta">
                  <div class="bank-account-actions">
                    <button type="button" class="secondary" data-bank-action="toggle-details" data-account-id="${account.id}">
                      ${isExpanded ? "Свернуть" : "Развернуть"}
                    </button>
                    ${
                      !canManageAccountStatus
                        ? ""
                        : isDeleted
                          ? `<button type="button" class="secondary" data-bank-action="restore" data-account-id="${account.id}">Восстановить</button>`
                          : `<button type="button" class="secondary" data-bank-action="delete" data-account-id="${account.id}">Удалить</button>`
                    }
                  </div>
                </div>
              </div>
              <div class="bank-account-body ${isExpanded ? "" : "is-collapsed"}">
                <div class="bank-upload">
                  <input
                    type="month"
                    data-bank-month="${account.id}"
                    value="${defaultUploadMonth}"
                    ${isDeleted || !canUploadStatement ? "disabled" : ""}
                  />
                  <select data-bank-parser data-account-id="${account.id}" ${isDeleted || !canChangeProfile ? "disabled" : ""}>
                    ${parserOptions}
                  </select>
                  <input type="file" accept=".csv,text/csv" data-bank-upload="1" data-account-id="${account.id}" ${isDeleted || !canUploadStatement ? "disabled" : ""} />
                  <span class="bank-status">${status}</span>
                </div>
                <div class="bank-template-editor">
                  <details>
                    <summary>Шаблон CSV банка (профиль и маппинг колонок)</summary>
                    <div class="bank-template-grid">
                      <label>
                        Разделитель
                        <select data-bank-template-delimiter data-account-id="${account.id}" ${
                          isDeleted || !canChangeProfile ? "disabled" : ""
                        }>
                          ${delimiterOptions}
                        </select>
                      </label>
                      <label>
                        Колонка даты
                        <input
                          type="text"
                          data-bank-template-date
                          data-account-id="${account.id}"
                          placeholder="Buchungstag"
                          value="${escapeHtml(statementTemplate.date || "")}"
                          ${isDeleted || !canChangeProfile ? "disabled" : ""}
                        />
                      </label>
                      <label>
                        Колонка даты (альт.)
                        <input
                          type="text"
                          data-bank-template-alt-date
                          data-account-id="${account.id}"
                          placeholder="Wertstellung"
                          value="${escapeHtml(statementTemplate.altDate || "")}"
                          ${isDeleted || !canChangeProfile ? "disabled" : ""}
                        />
                      </label>
                      <label>
                        Колонка суммы
                        <input
                          type="text"
                          data-bank-template-amount
                          data-account-id="${account.id}"
                          placeholder="Betrag/Umsatz"
                          value="${escapeHtml(statementTemplate.amount || "")}"
                          ${isDeleted || !canChangeProfile ? "disabled" : ""}
                        />
                      </label>
                      <label>
                        Колонка дебета
                        <input
                          type="text"
                          data-bank-template-debit
                          data-account-id="${account.id}"
                          placeholder="Soll"
                          value="${escapeHtml(statementTemplate.debit || "")}"
                          ${isDeleted || !canChangeProfile ? "disabled" : ""}
                        />
                      </label>
                      <label>
                        Колонка кредита
                        <input
                          type="text"
                          data-bank-template-credit
                          data-account-id="${account.id}"
                          placeholder="Haben"
                          value="${escapeHtml(statementTemplate.credit || "")}"
                          ${isDeleted || !canChangeProfile ? "disabled" : ""}
                        />
                      </label>
                      <label>
                        Колонка знака
                        <input
                          type="text"
                          data-bank-template-sign
                          data-account-id="${account.id}"
                          placeholder="S/H"
                          value="${escapeHtml(statementTemplate.sign || "")}"
                          ${isDeleted || !canChangeProfile ? "disabled" : ""}
                        />
                      </label>
                      <label>
                        Колонка остатка
                        <input
                          type="text"
                          data-bank-template-balance
                          data-account-id="${account.id}"
                          placeholder="Saldo/Kontostand"
                          value="${escapeHtml(statementTemplate.balance || "")}"
                          ${isDeleted || !canChangeProfile ? "disabled" : ""}
                        />
                      </label>
                      <div class="bank-template-actions">
                        <button type="button" class="secondary" data-bank-action="save-template" data-account-id="${account.id}" ${
                          isDeleted || !canChangeProfile ? "disabled" : ""
                        }>
                          Сохранить шаблон
                        </button>
                        <button type="button" class="secondary" data-bank-action="reset-template" data-account-id="${account.id}" ${
                          isDeleted || !canChangeProfile ? "disabled" : ""
                        }>
                          Сбросить
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div class="bank-manual-opening">
                  <span class="bank-status">Ручной остаток на начало месяца</span>
                  <input
                    type="month"
                    data-bank-opening-month
                    data-account-id="${account.id}"
                    value="${defaultManualOpeningMonth}"
                    ${isDeleted || !canManageOpening ? "disabled" : ""}
                  />
                  <input
                    type="text"
                    data-bank-opening-amount
                    data-account-id="${account.id}"
                    placeholder="например 12500,00"
                    value="${Number.isFinite(manualOpeningValue) ? formatNumberForInput(manualOpeningValue) : ""}"
                    ${isDeleted || !canManageOpening ? "disabled" : ""}
                  />
                  <button type="button" class="secondary" data-bank-action="save-opening" data-account-id="${account.id}" ${
                    isDeleted || !canManageOpening ? "disabled" : ""
                  }>
                    Сохранить
                  </button>
                  <button type="button" class="secondary" data-bank-action="clear-opening" data-account-id="${account.id}" ${
                    isDeleted || !canManageOpening ? "disabled" : ""
                  }>
                    Очистить
                  </button>
                </div>
                <div class="bank-status">
                  Загруженные месяцы: <span class="months-inline">${loadedMonthsHtml}</span>
                </div>
                ${renderBankAccountSummary(account.summary, account.transactions, account.manualOpeningBalances)}
              </div>
            </article>`;
        })
        .join("");

      return `
        <section class="bank-entity-card">
          <h3>${escapeHtml(entity.name)}</h3>
          <div class="bank-accounts">${accountsHtml}</div>
          ${renderMiniSummaryTable(summary)}
        </section>`;
    })
    .join("");
}

function getVisibleBankAccountIds() {
  const statusFilter = String(state.banksUi.status || "active");
  const dataFilter = String(state.banksUi.data || "all");
  const searchNeedle = normalizeText(state.banksUi.search || "");
  const legalEntityById = new Map(state.banks.legalEntities.map((entity) => [entity.id, entity.name]));

  const visible = state.banks.accounts.filter((account) => {
    if (statusFilter === "active" && account.status === "DELETED") return false;
    if (statusFilter === "deleted" && account.status !== "DELETED") return false;

    const hasData = Boolean(account.summary);
    if (dataFilter === "with-data" && !hasData) return false;
    if (dataFilter === "without-data" && hasData) return false;

    if (searchNeedle) {
      const haystack = normalizeText(
        `${account.name || ""} ${account.fileName || ""} ${legalEntityById.get(account.legalEntityId) || ""}`
      );
      if (!haystack.includes(searchNeedle)) return false;
    }

    return true;
  });

  return new Set(visible.map((account) => account.id));
}

function renderBanksFilterStatus(visibleAccountIds) {
  const total = state.banks.accounts.length;
  const visible = [...visibleAccountIds].length;
  const active = state.banks.accounts.filter((account) => account.status !== "DELETED").length;
  const withData = state.banks.accounts.filter((account) => account.summary).length;
  els.banksFilterStatus.textContent = `Показано счетов: ${visible} из ${total}. Активных: ${active}. С данными: ${withData}.`;
}

function renderBankAccountSummary(summary, transactions, manualOpeningBalances = {}) {
  if (!summary) {
    return `<div class="bank-account-summary empty">Нет данных по банку.</div>`;
  }

  const monthlyRows = summarizeBankTransactionsByMonth(transactions || [], manualOpeningBalances || {});
  const monthlyTableHtml = renderBankAccountMonthlyTable(monthlyRows);

  return `
    <div class="bank-account-summary">
      <div class="bank-metric"><span>Начало месяца</span><strong>${formatMaybeMoney(summary.openingBalance)}</strong></div>
      <div class="bank-metric"><span>Конец месяца</span><strong>${formatMaybeMoney(summary.monthEndBalance)}</strong></div>
      <div class="bank-metric"><span>Последняя дата</span><strong>${formatDate(summary.latestDate)}</strong></div>
      <div class="bank-metric"><span>Остаток на последнюю дату</span><strong>${formatMaybeMoney(summary.latestBalance)}</strong></div>
      <div class="bank-metric"><span>Поступления</span><strong>${formatMoney(summary.inflow)}</strong></div>
      <div class="bank-metric"><span>Выбытия</span><strong>${formatMoney(summary.outflow)}</strong></div>
    </div>
    ${monthlyTableHtml}
  `;
}

function summarizeBankTransactionsByMonth(transactions, manualOpeningBalances = {}) {
  if (!transactions || transactions.length === 0) return [];

  const sorted = [...transactions].sort((a, b) => {
    const byDate = a.dateObj.getTime() - b.dateObj.getTime();
    return byDate !== 0 ? byDate : (a.idx || 0) - (b.idx || 0);
  });

  const grouped = new Map();

  sorted.forEach((tx) => {
    const monthKey = `${tx.dateObj.getFullYear()}-${String(tx.dateObj.getMonth() + 1).padStart(2, "0")}`;

    if (!grouped.has(monthKey)) {
      grouped.set(monthKey, {
        month: monthKey,
        transactions: [],
      });
    }

    grouped.get(monthKey).transactions.push(tx);
  });

  const baseRows = [...grouped.values()]
    .map(({ month, transactions: monthTx }) => {
      const monthStartDate = parseFlexibleDate(`${month}-01`);
      if (!monthStartDate) return null;
      const lastWithBalance = [...monthTx].reverse().find((tx) => tx.balance !== null) || null;
      const beforeMonthWithBalance = sorted
        .filter((tx) => tx.dateObj < monthStartDate && tx.balance !== null)
        .at(-1);
      const firstWithBalance = monthTx.find((tx) => tx.balance !== null) || null;
      const monthHasMovement = monthTx.some((tx) => Math.abs(tx.amount) > 0.000001);

      let openingBalance = beforeMonthWithBalance ? beforeMonthWithBalance.balance : null;
      if (openingBalance === null && firstWithBalance && !monthHasMovement) {
        openingBalance = firstWithBalance.balance;
      }
      const endBalance = lastWithBalance ? lastWithBalance.balance : null;

      const inflow = monthTx.filter((tx) => tx.amount > 0).reduce((sum, tx) => sum + tx.amount, 0);
      const outflow = monthTx.filter((tx) => tx.amount < 0).reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

      return {
        month,
        openingBalance,
        endBalance,
        inflow,
        outflow,
        net: inflow - outflow,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.month.localeCompare(b.month));

  // Carry forward rule:
  // opening(month N) <- end(month N-1) for every next month.
  // if end is missing but opening exists, estimate end = opening + net.
  for (let i = 0; i < baseRows.length; i += 1) {
    const current = baseRows[i];
    const prev = i > 0 ? baseRows[i - 1] : null;

    const manualOpening = toMaybeNumber(manualOpeningBalances[current.month]);

    if (Number.isFinite(manualOpening)) {
      current.openingBalance = manualOpening;
    } else if (prev && Number.isFinite(prev.endBalance)) {
      current.openingBalance = prev.endBalance;
    }

    if (Number.isFinite(current.openingBalance)) {
      const calculatedEnd = current.openingBalance + current.net;

      // Consistency rule:
      // if statement month-end conflicts with opening+net,
      // prefer formula result to keep monthly chain stable.
      if (!Number.isFinite(current.endBalance)) {
        current.endBalance = calculatedEnd;
      } else {
        const diff = Math.abs(current.endBalance - calculatedEnd);
        current.endBalance = diff <= 0.05 ? current.endBalance : calculatedEnd;
      }
    }
  }

  return baseRows.sort((a, b) => b.month.localeCompare(a.month));
}

function renderBankAccountMonthlyTable(monthlyRows) {
  if (!monthlyRows || monthlyRows.length === 0) {
    return `<div class="bank-account-monthly empty">Нет помесячных данных.</div>`;
  }

  return `
    <div class="bank-account-monthly table-wrap small">
      <table>
        <thead>
          <tr>
            <th>Месяц</th>
            <th>Начало месяца</th>
            <th>Конец месяца</th>
            <th>Поступления</th>
            <th>Выбытия</th>
            <th>Чистый поток</th>
          </tr>
        </thead>
        <tbody>
          ${monthlyRows
            .map(
              (row) => `
            <tr>
              <td>${row.month}</td>
              <td>${formatMaybeMoney(row.openingBalance)}</td>
              <td>${formatMaybeMoney(row.endBalance)}</td>
              <td>${formatMoney(row.inflow)}</td>
              <td>${formatMoney(row.outflow)}</td>
              <td>${formatMoney(row.net)}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderMiniSummaryTable(summary) {
  if (!summary) {
    return `<div class="empty">Нет данных для расчета.</div>`;
  }

  return `
    <div class="table-wrap small">
      <table>
        <thead>
          <tr>
            <th>Начало месяца</th>
            <th>Конец месяца</th>
            <th>Последняя дата</th>
            <th>Остаток на последнюю дату</th>
            <th>Поступления</th>
            <th>Выбытия</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${formatMaybeMoney(summary.openingBalance)}</td>
            <td>${formatMaybeMoney(summary.monthEndBalance)}</td>
            <td>${formatDate(summary.latestDate)}</td>
            <td>${formatMaybeMoney(summary.latestBalance)}</td>
            <td>${formatMoney(summary.inflow)}</td>
            <td>${formatMoney(summary.outflow)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderBanksEntitySummaryTable(entitySummaries) {
  const rows = entitySummaries
    .map(({ entity, summary }) => {
      if (!summary) {
        return `
        <tr>
          <td>${escapeHtml(entity.name)}</td>
          <td>н/д</td>
          <td>н/д</td>
          <td>н/д</td>
          <td>н/д</td>
          <td>${formatMoney(0)}</td>
          <td>${formatMoney(0)}</td>
        </tr>`;
      }

      return `
      <tr>
        <td>${escapeHtml(entity.name)}</td>
        <td>${formatMaybeMoney(summary.openingBalance)}</td>
        <td>${formatMaybeMoney(summary.monthEndBalance)}</td>
        <td>${formatDate(summary.latestDate)}</td>
        <td>${formatMaybeMoney(summary.latestBalance)}</td>
        <td>${formatMoney(summary.inflow)}</td>
        <td>${formatMoney(summary.outflow)}</td>
      </tr>`;
    })
    .join("");

  els.banksEntitySummaryBody.innerHTML =
    rows || `<tr><td colspan="7" class="empty">Нет данных по юрлицам.</td></tr>`;
}

function renderBanksGlobalSummary(entitySummaries) {
  const globalSummary = summarizeEntity(
    entitySummaries.flatMap(({ activeAccounts }) => activeAccounts)
  );

  if (!globalSummary) {
    els.banksGlobalSummaryBody.innerHTML = `<tr><td colspan="6" class="empty">Нет данных.</td></tr>`;
    return;
  }

  els.banksGlobalSummaryBody.innerHTML = `
    <tr class="grand-total">
      <td>${formatMaybeMoney(globalSummary.openingBalance)}</td>
      <td>${formatMaybeMoney(globalSummary.monthEndBalance)}</td>
      <td>${formatDate(globalSummary.latestDate)}</td>
      <td>${formatMaybeMoney(globalSummary.latestBalance)}</td>
      <td>${formatMoney(globalSummary.inflow)}</td>
      <td>${formatMoney(globalSummary.outflow)}</td>
    </tr>
  `;
}

function summarizeEntity(accounts) {
  const summaries = accounts.map((acc) => acc.summary).filter(Boolean);
  if (summaries.length === 0) return null;

  return {
    openingBalance: sumMaybeValues(summaries.map((item) => item.openingBalance)),
    monthEndBalance: sumMaybeValues(summaries.map((item) => item.monthEndBalance)),
    latestBalance: sumMaybeValues(summaries.map((item) => item.latestBalance)),
    inflow: summaries.reduce((sum, item) => sum + item.inflow, 0),
    outflow: summaries.reduce((sum, item) => sum + item.outflow, 0),
    latestDate: summaries
      .map((item) => item.latestDate)
      .sort((a, b) => a.getTime() - b.getTime())
      .at(-1),
  };
}

function sumMaybeValues(values) {
  const defined = values.filter((value) => Number.isFinite(value));
  if (defined.length === 0) return null;
  return defined.reduce((sum, value) => sum + value, 0);
}

function persistBanksAndRender() {
  saveBanksState(state.banks);
  renderBanksTab();
  renderObligationsTab();
}

function refreshBankEntitySelect() {
  if (!els.bankAccountEntitySelect) return;
  const selected = Number(els.bankAccountEntitySelect.value) || state.banks.legalEntities[0]?.id || 0;

  els.bankAccountEntitySelect.innerHTML = state.banks.legalEntities
    .map((entity) => `<option value="${entity.id}">${escapeHtml(entity.name)}</option>`)
    .join("");

  if (!selected || els.bankAccountEntitySelect.options.length === 0) return;

  const exists = [...els.bankAccountEntitySelect.options].some(
    (option) => Number(option.value) === selected
  );

  if (exists) {
    els.bankAccountEntitySelect.value = String(selected);
  } else {
    els.bankAccountEntitySelect.selectedIndex = 0;
  }
}

function refreshObligationEntitySelect(preferredId = 0) {
  if (!els.obligationLegalEntity) return 0;
  const entities = state.banks.legalEntities || [];
  if (!entities.length) {
    els.obligationLegalEntity.innerHTML = `<option value="">Нет юрлиц</option>`;
    els.obligationLegalEntity.value = "";
    return 0;
  }

  const current = Number(preferredId) || Number(els.obligationLegalEntity.value) || Number(entities[0]?.id) || 0;
  els.obligationLegalEntity.innerHTML = entities
    .map((entity) => `<option value="${entity.id}">${escapeHtml(entity.name)}</option>`)
    .join("");

  const exists = entities.some((entity) => Number(entity.id) === current);
  const next = exists ? current : Number(entities[0]?.id) || 0;
  els.obligationLegalEntity.value = next > 0 ? String(next) : "";
  return next;
}

function refreshObligationAccountSelect(legalEntityId = 0, preferredAccountId = 0) {
  if (!els.obligationBankAccount) return 0;
  const accounts = (state.banks.accounts || [])
    .filter(
      (account) =>
        account.status !== "DELETED" &&
        Number(account.legalEntityId) === Number(legalEntityId)
    )
    .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "ru"));

  if (!accounts.length) {
    els.obligationBankAccount.innerHTML = `<option value="">Нет счетов</option>`;
    els.obligationBankAccount.value = "";
    return 0;
  }

  els.obligationBankAccount.innerHTML = accounts
    .map((account) => `<option value="${account.id}">${escapeHtml(account.name)}</option>`)
    .join("");

  const preferred = Number(preferredAccountId) || Number(els.obligationBankAccount.value) || Number(accounts[0]?.id) || 0;
  const exists = accounts.some((account) => Number(account.id) === preferred);
  const next = exists ? preferred : Number(accounts[0]?.id) || 0;
  els.obligationBankAccount.value = next > 0 ? String(next) : "";
  return next;
}

function getLegalEntityNameById(id) {
  const entity = (state.banks.legalEntities || []).find((item) => Number(item.id) === Number(id));
  return entity?.name || "—";
}

function getBankAccountNameById(id) {
  const account = (state.banks.accounts || []).find((item) => Number(item.id) === Number(id));
  return account?.name || "—";
}

function refreshBankFolderEntitySelect() {
  if (!els.bankFolderEntitySelect) return;

  const current = Number(state.banksUi.folderImport.legalEntityId) || Number(els.bankFolderEntitySelect.value) || 0;
  const options = ['<option value="0">Все юрлица</option>'].concat(
    state.banks.legalEntities.map((entity) => `<option value="${entity.id}">${escapeHtml(entity.name)}</option>`)
  );
  els.bankFolderEntitySelect.innerHTML = options.join("");

  const exists = [...els.bankFolderEntitySelect.options].some((option) => Number(option.value) === current);
  const nextValue = exists ? current : 0;
  els.bankFolderEntitySelect.value = String(nextValue);
  state.banksUi.folderImport.legalEntityId = nextValue;
}

function getFolderImportAccountOptions(legalEntityId = 0) {
  const accounts = (state.banks.accounts || []).filter((account) => {
    if (account.status === "DELETED") return false;
    if (Number(legalEntityId) > 0 && Number(account.legalEntityId) !== Number(legalEntityId)) return false;
    return true;
  });
  return accounts.sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "ru"));
}

function renderBankFolderImportPreview() {
  if (!els.bankFolderPreviewBody || !els.bankFolderStatus) return;

  const items = state.banksUi.folderImport.items || [];
  const selectedEntityId = Number(state.banksUi.folderImport.legalEntityId) || 0;
  const availableAccounts = getFolderImportAccountOptions(selectedEntityId);
  const canUploadStatement = hasPermission("banks.statement.upload");

  if (!items.length) {
    els.bankFolderPreviewBody.innerHTML = `<tr><td colspan="9" class="empty">Добавьте файлы и нажмите "Собрать предпросмотр".</td></tr>`;
    els.bankFolderStatus.textContent = state.banksUi.folderImport.statusText || "Выберите папку/несколько CSV для предпросмотра.";
    els.bankFolderStatus.className = "status";
    setElementDisabled(els.bankFolderApplyBtn, !canUploadStatement);
    return;
  }

  const readyCount = items.filter((item) => item.ready && item.include).length;
  const errorCount = items.filter((item) => item.error).length;
  const skippedCount = items.filter((item) => !item.include).length;
  const dynamicStatus = `Файлов: ${items.length}. Готово: ${readyCount}. Ошибок: ${errorCount}. Исключено: ${skippedCount}.`;
  const rawStatusText = String(state.banksUi.folderImport.statusText || "");
  const showRawStatus = rawStatusText.startsWith("Анализ файлов:") || rawStatusText.startsWith("Ошибки в файлах:");
  els.bankFolderStatus.textContent = showRawStatus ? rawStatusText : dynamicStatus;
  els.bankFolderStatus.className = `status bank-folder-status ${
    errorCount > 0 ? "warn" : readyCount > 0 ? "ready" : "warn"
  }`;
  setElementDisabled(els.bankFolderApplyBtn, !canUploadStatement || readyCount === 0);

  els.bankFolderPreviewBody.innerHTML = items
    .map((item, index) => {
      const accountExists = availableAccounts.some((account) => Number(account.id) === Number(item.accountId));
      const safeAccountId = accountExists ? Number(item.accountId) : 0;
      if (!accountExists && item.accountId) {
        item.accountId = 0;
        item.ready = false;
        item.status = "Требуется выбрать счет";
      }

      const accountOptions = [`<option value="0">Выберите счет</option>`]
        .concat(
          availableAccounts.map(
            (account) =>
              `<option value="${account.id}" ${Number(account.id) === safeAccountId ? "selected" : ""}>${escapeHtml(
                account.name
              )}</option>`
          )
        )
        .join("");

      const rowClass = item.error ? "unresolved-row" : "";
      return `
        <tr class="${rowClass}" data-folder-row="${index}">
          <td><input type="checkbox" data-folder-include ${item.include ? "checked" : ""} ${canUploadStatement ? "" : "disabled"} /></td>
          <td>${escapeHtml(item.fileName || "")}</td>
          <td>${escapeHtml(item.profileLabel || "")}</td>
          <td>
            <select data-folder-account-id ${canUploadStatement ? "" : "disabled"}>
              ${accountOptions}
            </select>
          </td>
          <td>
            <input type="month" data-folder-month value="${escapeHtml(item.month || "")}" ${canUploadStatement ? "" : "disabled"} />
          </td>
          <td>${item.operationsCount || 0}</td>
          <td class="cell-number">${formatMoney(item.inflow || 0)}</td>
          <td class="cell-number">${formatMoney(item.outflow || 0)}</td>
          <td>${escapeHtml(item.status || (item.ready ? "Готово" : "Проверьте настройки"))}</td>
        </tr>`;
    })
    .join("");
}

function bindReconcileEvents() {
  els.unresolvedOnly.addEventListener("change", renderReconcileTable);
  els.downloadUnresolvedCsv.addEventListener("click", downloadUnresolvedCsv);

  els.reconcileTableBody.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='assign']");
    if (!button) return;

    const rowId = Number(button.dataset.id);
    applyManualAssignment(rowId);
  });
}

function bindArticleEvents() {
  els.articleSearch.addEventListener("input", renderArticlesTable);
  els.articleGroupFilter.addEventListener("change", renderArticlesTable);
  els.articleActivityFilter.addEventListener("change", renderArticlesTable);
  els.articleStatusFilter.addEventListener("change", renderArticlesTable);
  els.addArticleBtn.addEventListener("click", () => {
    if (!requirePermission("articles.manage", "Недостаточно прав: роль не позволяет редактировать справочник статей.")) return;
    openArticleForm();
  });
  els.downloadArticlesCsv.addEventListener("click", downloadArticlesCsv);
  els.cancelArticleEdit.addEventListener("click", closeArticleForm);
  els.articleForm.addEventListener("submit", onArticleFormSubmit);

  els.articlesTableBody.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const action = button.dataset.action;
    const id = Number(button.dataset.id);

    if (action === "edit") {
      if (!requirePermission("articles.manage", "Недостаточно прав: роль не позволяет редактировать статьи.")) return;
      const article = state.articles.find((item) => item.id === id);
      if (article) openArticleForm(article);
      return;
    }

    if (action === "rename") {
      if (!requirePermission("articles.manage", "Недостаточно прав: роль не позволяет переименовывать статьи.")) return;
      renameArticle(id);
      return;
    }

    if (action === "delete") {
      if (!requirePermission("articles.manage", "Недостаточно прав: роль не позволяет удалять статьи.")) return;
      markArticleDeleted(id);
      return;
    }

    if (action === "restore") {
      if (!requirePermission("articles.manage", "Недостаточно прав: роль не позволяет восстанавливать статьи.")) return;
      restoreArticle(id);
    }
  });
}

function onFileUploaded(event) {
  if (!requirePermission("report.import", "Недостаточно прав: только Админ или Оператор могут загружать операции.")) {
    event.target.value = "";
    return;
  }

  const [file] = event.target.files || [];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    loadOperationsFromText(String(reader.result || ""), file.name);
  };
  reader.onerror = () => {
    els.fileStatus.textContent = "Ошибка чтения файла. Проверьте CSV и повторите.";
  };

  reader.readAsText(file, "utf-8");
}

function loadOperationsFromText(csvText, sourceName) {
  try {
    const parsed = parseOperationsCsv(csvText);
    state.operationsRaw = parsed;
    state.manualAssignments = {};

    const dates = parsed
      .map((row) => row.dateObj)
      .sort((a, b) => a.getTime() - b.getTime());

    if (dates.length > 0) {
      els.dateFromInput.value = toDateInputValue(dates[0]);
      els.dateToInput.value = toDateInputValue(dates[dates.length - 1]);
    }

    els.fileStatus.textContent = `Загружено: ${sourceName}. Операций: ${parsed.length}.`;
    logChange("OPERATIONS_LOADED", "Отчет ДДС", `Источник: ${sourceName}; операций: ${parsed.length}`);
    renderReport();
  } catch (error) {
    state.operationsRaw = [];
    state.manualAssignments = {};
    renderReport();
    els.fileStatus.textContent = `Ошибка: ${error.message}`;
  }
}

function parseOperationsCsv(text) {
  const cleanText = text.replace(/^\uFEFF/, "").trim();
  if (!cleanText) throw new Error("CSV пустой.");

  const firstLine = cleanText.split("\n")[0] || "";
  const delimiter = (firstLine.match(/;/g) || []).length >= (firstLine.match(/,/g) || []).length ? ";" : ",";
  const rows = parseCsv(cleanText, delimiter);

  if (rows.length < 2) throw new Error("В CSV нет данных.");

  const headers = rows[0].map((header) => normalizeText(header));
  const idxDate = findColumn(headers, ["дата", "date"]);
  const idxArticle = findColumn(headers, ["статья ддс", "статья", "фонд", "article"]);
  const idxAmount = findColumn(headers, ["сумма", "amount", "итого", "sum"]);
  const idxType = findColumn(headers, ["группа", "вид операции", "операция", "тип"]);
  const idxCounterparty = findColumn(headers, ["контрагент", "counterparty", "partner", "клиент"]);
  const idxComment = findColumn(headers, ["комментар", "comment", "назначение", "описание", "description"]);

  if (idxDate === -1) throw new Error("Не найдена колонка 'Дата'.");
  if (idxAmount === -1) throw new Error("Не найдена колонка 'Сумма'.");

  return rows
    .slice(1)
    .map((cells, rowIdx) => {
      const dateRaw = String(cells[idxDate] || "").trim();
      const articleRaw = idxArticle >= 0 ? String(cells[idxArticle] || "").trim() : "";
      const amountRaw = String(cells[idxAmount] || "").trim();
      const typeRaw = idxType >= 0 ? String(cells[idxType] || "").trim() : "";
      const counterparty = idxCounterparty >= 0 ? String(cells[idxCounterparty] || "").trim() : "";
      const comment = idxComment >= 0 ? String(cells[idxComment] || "").trim() : "";

      const dateObj = parseFlexibleDate(dateRaw);
      if (!dateObj) throw new Error(`Неверная дата в строке ${rowIdx + 2}: ${dateRaw}`);

      const amountValue = parseAmount(amountRaw);
      if (amountValue === null) throw new Error(`Неверная сумма в строке ${rowIdx + 2}: ${amountRaw}`);

      return {
        rowId: rowIdx + 2,
        dateRaw,
        dateObj,
        counterparty,
        comment,
        articleInput: articleRaw,
        amount: Math.abs(amountValue),
        direction: resolveOperationType(typeRaw, amountValue),
      };
    });
}

function renderReport() {
  const filteredOperations = getFilteredOperations();
  state.filteredOperations = filteredOperations;

  const { reportRows, totalsByActivity, grandTotals } = aggregateByArticle(filteredOperations);
  state.reportRows = reportRows;

  const monthRows = aggregateByMonth(filteredOperations);
  state.monthRows = monthRows;

  const unknownCount = filteredOperations.filter((op) => op.unresolved).length;

  renderReportMetrics(grandTotals, filteredOperations.length, unknownCount);
  renderShortDdsTable(totalsByActivity, grandTotals, reportRows.length);
  renderReportTable(reportRows, totalsByActivity, grandTotals);
  renderMonthTable(monthRows);
  renderObligationsTab();
  renderAnalyticsTab();
  renderReconcileTable();
  persistRuntimeState();
}

function getFilteredOperations() {
  const from = els.dateFromInput.value ? parseFlexibleDate(els.dateFromInput.value) : null;
  const to = els.dateToInput.value ? parseFlexibleDate(els.dateToInput.value) : null;
  const activity = els.activityFilter.value;
  const articleMap = buildArticleMap(state.articles);

  return state.operationsRaw
    .map((op) => enrichOperation(op, articleMap))
    .filter((op) => {
      const inFromRange = !from || op.dateObj >= from;
      const inToRange = !to || op.dateObj <= to;
      const activityOk = activity === "all" || op.activity === activity;
      return inFromRange && inToRange && activityOk;
    });
}

function enrichOperation(operation, articleMap) {
  const manualArticleName = state.manualAssignments[operation.rowId];
  const selectedArticleInput =
    typeof manualArticleName === "string" ? manualArticleName : operation.articleInput;
  const matched = findArticle(selectedArticleInput, articleMap);

  return {
    ...operation,
    assignedArticleInput: selectedArticleInput,
    article: matched?.name || UNKNOWN_ARTICLE,
    activity: matched?.activity || UNKNOWN_ACTIVITY,
    unresolved: !matched,
  };
}

function aggregateByArticle(operations) {
  const grouped = new Map();

  operations.forEach((op) => {
    const key = `${op.activity}___${op.article}`;
    if (!grouped.has(key)) {
      grouped.set(key, {
        activity: op.activity,
        article: op.article,
        inAmount: 0,
        outAmount: 0,
        count: 0,
      });
    }

    const bucket = grouped.get(key);
    if (op.direction === "Поступление") bucket.inAmount += op.amount;
    else bucket.outAmount += op.amount;
    bucket.count += 1;
  });

  const reportRows = [...grouped.values()].map((row) => ({
    ...row,
    net: row.inAmount - row.outAmount,
  }));

  reportRows.sort((a, b) => {
    const activityOrder = a.activity.localeCompare(b.activity, "ru");
    if (activityOrder !== 0) return activityOrder;
    return a.article.localeCompare(b.article, "ru");
  });

  const totalsByActivity = new Map();

  reportRows.forEach((row) => {
    if (!totalsByActivity.has(row.activity)) {
      totalsByActivity.set(row.activity, { inAmount: 0, outAmount: 0, net: 0, count: 0 });
    }

    const totals = totalsByActivity.get(row.activity);
    totals.inAmount += row.inAmount;
    totals.outAmount += row.outAmount;
    totals.net += row.net;
    totals.count += row.count;
  });

  const rowsForDdsTotal = reportRows.filter((row) => !isTechnicalActivity(row.activity));

  const grandTotals = {
    inAmount: rowsForDdsTotal.reduce((sum, row) => sum + row.inAmount, 0),
    outAmount: rowsForDdsTotal.reduce((sum, row) => sum + row.outAmount, 0),
    net: rowsForDdsTotal.reduce((sum, row) => sum + row.net, 0),
    count: rowsForDdsTotal.reduce((sum, row) => sum + row.count, 0),
  };

  return { reportRows, totalsByActivity, grandTotals };
}

function aggregateByMonth(operations) {
  const monthMap = new Map();

  operations.forEach((op) => {
    const monthKey = `${op.dateObj.getFullYear()}-${String(op.dateObj.getMonth() + 1).padStart(2, "0")}`;

    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, { month: monthKey, inAmount: 0, outAmount: 0 });
    }

    const bucket = monthMap.get(monthKey);
    if (op.direction === "Поступление") bucket.inAmount += op.amount;
    else bucket.outAmount += op.amount;
  });

  return [...monthMap.values()]
    .map((row) => ({ ...row, net: row.inAmount - row.outAmount }))
    .sort((a, b) => a.month.localeCompare(b.month));
}

function renderReportMetrics(totals, operationCount, unknownCount) {
  els.reportMetrics.innerHTML = `
    <article class="metric"><div class="label">Операций</div><div class="value">${operationCount}</div></article>
    <article class="metric"><div class="label">Поступления</div><div class="value">${formatMoney(totals.inAmount)}</div></article>
    <article class="metric"><div class="label">Выбытия</div><div class="value">${formatMoney(totals.outAmount)}</div></article>
    <article class="metric"><div class="label">Чистый поток</div><div class="value">${formatMoney(totals.net)}</div></article>
    <article class="metric"><div class="label">Не сопоставлено</div><div class="value">${unknownCount}</div></article>
  `;
}

function renderShortDdsTable(totalsByActivity, grandTotals, reportRowsCount) {
  if (!els.shortDdsTableBody) return;

  if (reportRowsCount === 0) {
    els.shortDdsTableBody.innerHTML = `<tr><td colspan="4" class="empty">Загрузите CSV операций для расчета ДДС.</td></tr>`;
    return;
  }

  const activityRows = [
    { label: "01 Операционная деятельность", prefix: "01 " },
    { label: "02 Инвестиционная деятельность", prefix: "02 " },
    { label: "03 Финансовая деятельность", prefix: "03 " },
  ];

  let html = activityRows
    .map((item) => {
      const totals = summarizeTotalsByActivityPrefix(totalsByActivity, item.prefix);
      return `
      <tr>
        <td>${escapeHtml(item.label)}</td>
        <td>${formatMoney(totals.inAmount)}</td>
        <td>${formatMoney(totals.outAmount)}</td>
        <td>${formatMoney(totals.net)}</td>
      </tr>`;
    })
    .join("");

  html += `
    <tr class="grand-total">
      <td>Итого по ДДС</td>
      <td>${formatMoney(grandTotals.inAmount)}</td>
      <td>${formatMoney(grandTotals.outAmount)}</td>
      <td>${formatMoney(grandTotals.net)}</td>
    </tr>
  `;

  els.shortDdsTableBody.innerHTML = html;
}

function summarizeTotalsByActivityPrefix(totalsByActivity, prefix) {
  const normalizedPrefix = normalizeText(prefix);
  const summary = { inAmount: 0, outAmount: 0, net: 0 };

  for (const [activity, totals] of totalsByActivity.entries()) {
    if (!normalizeText(activity).startsWith(normalizedPrefix)) continue;
    summary.inAmount += totals.inAmount || 0;
    summary.outAmount += totals.outAmount || 0;
    summary.net += totals.net || 0;
  }

  return summary;
}

function renderReportTable(rows, totalsByActivity, grandTotals) {
  if (rows.length === 0) {
    els.reportTableBody.innerHTML = `<tr><td colspan="6" class="empty">Загрузите CSV операций для расчета ДДС.</td></tr>`;
    return;
  }

  let html = "";

  rows.forEach((row, index) => {
    html += `
      <tr>
        <td>${escapeHtml(row.activity)}</td>
        <td>${escapeHtml(row.article)}</td>
        <td>${formatMoney(row.inAmount)}</td>
        <td>${formatMoney(row.outAmount)}</td>
        <td>${formatMoney(row.net)}</td>
        <td>${row.count}</td>
      </tr>
    `;

    const nextActivity = rows[index + 1]?.activity;
    if (row.activity !== nextActivity) {
      const totals = totalsByActivity.get(row.activity);
      html += `
        <tr class="section-total">
          <td colspan="2">Итого: ${escapeHtml(row.activity)}</td>
          <td>${formatMoney(totals.inAmount)}</td>
          <td>${formatMoney(totals.outAmount)}</td>
          <td>${formatMoney(totals.net)}</td>
          <td>${totals.count}</td>
        </tr>
      `;
    }
  });

  html += `
    <tr class="grand-total">
      <td colspan="2">Итого по ДДС (без технических операций)</td>
      <td>${formatMoney(grandTotals.inAmount)}</td>
      <td>${formatMoney(grandTotals.outAmount)}</td>
      <td>${formatMoney(grandTotals.net)}</td>
      <td>${grandTotals.count}</td>
    </tr>
  `;

  els.reportTableBody.innerHTML = html;
}

function renderMonthTable(monthRows) {
  if (monthRows.length === 0) {
    els.monthTableBody.innerHTML = `<tr><td colspan="4" class="empty">Нет данных.</td></tr>`;
    return;
  }

  els.monthTableBody.innerHTML = monthRows
    .map(
      (row) => `
      <tr>
        <td>${row.month}</td>
        <td>${formatMoney(row.inAmount)}</td>
        <td>${formatMoney(row.outAmount)}</td>
        <td>${formatMoney(row.net)}</td>
      </tr>`
    )
    .join("");
}

function renderReconcileTable() {
  if (!els.reconcileTableBody || !els.reconcileStatus) return;

  const canAssign = hasPermission("reconcile.assign");
  const operations = getOperationsForReconcile();
  const showOnlyUnresolved = Boolean(els.unresolvedOnly.checked);
  const rows = showOnlyUnresolved ? operations.filter((op) => op.unresolved) : operations;

  const unresolvedTotal = operations.filter((op) => op.unresolved).length;
  els.reconcileStatus.textContent = `Операций: ${operations.length}. Неразнесенных: ${unresolvedTotal}.${canAssign ? "" : " Режим только просмотра."}`;
  persistRuntimeState();

  if (rows.length === 0) {
    els.reconcileTableBody.innerHTML = `<tr><td colspan="8" class="empty">Нет строк для отображения.</td></tr>`;
    return;
  }

  const articleOptions = getArticleOptionsForSelect();

  els.reconcileTableBody.innerHTML = rows
    .map((op) => {
      const rowClass = op.unresolved ? "unresolved-row" : "";
      const selectedOptionValue = op.unresolved ? "" : op.article;

      return `
      <tr class="${rowClass}">
        <td>${escapeHtml(toDateInputValue(op.dateObj))}</td>
        <td>${escapeHtml(op.counterparty || "-")}</td>
        <td>${escapeHtml(op.comment || "-")}</td>
        <td>${escapeHtml(op.articleInput || "-")}</td>
        <td>${formatMoney(op.direction === "Выбытие" ? -op.amount : op.amount)}</td>
        <td>${escapeHtml(op.direction)}</td>
        <td>
          <select data-row-id="${op.rowId}" ${canAssign ? "" : "disabled"}>
            <option value="" ${selectedOptionValue === "" ? "selected" : ""}>Не выбрано</option>
            ${articleOptions
              .map(
                (name) =>
                  `<option value="${escapeHtml(name)}" ${name === selectedOptionValue ? "selected" : ""}>${escapeHtml(name)}</option>`
              )
              .join("")}
          </select>
        </td>
        <td><button type="button" class="secondary" data-action="assign" data-id="${op.rowId}" ${canAssign ? "" : "disabled"}>Применить</button></td>
      </tr>`;
    })
    .join("");
}

function getOperationsForReconcile() {
  const articleMap = buildArticleMap(state.articles);
  return state.operationsRaw.map((op) => enrichOperation(op, articleMap));
}

function getArticleOptionsForSelect() {
  return uniqueValues(
    state.articles
      .filter((row) => row.status !== "DELETE")
      .map((row) => row.name)
      .filter(Boolean)
  );
}

function applyManualAssignment(rowId) {
  if (!requirePermission("reconcile.assign", "Недостаточно прав: роль не позволяет разносить платежи вручную.")) return;
  const selectEl = els.reconcileTableBody.querySelector(`select[data-row-id="${rowId}"]`);
  if (!selectEl) return;

  const previousValue = state.manualAssignments[rowId] || "";
  const selectedArticle = selectEl.value.trim();
  if (selectedArticle) {
    state.manualAssignments[rowId] = selectedArticle;
  } else {
    delete state.manualAssignments[rowId];
  }

  if (selectedArticle !== previousValue) {
    const operation = state.operationsRaw.find((op) => op.rowId === rowId);
    const opDate = operation?.dateObj ? toDateInputValue(operation.dateObj) : "н/д";
    const opCounterparty = operation?.counterparty || "-";
    const nextLabel = selectedArticle || "Не выбрано";
    logChange("RECONCILE_ASSIGNED", "Разнесение платежей", `Строка ${rowId}; дата ${opDate}; контрагент ${opCounterparty}; статья: ${nextLabel}`);
  }

  renderReport();
}

function downloadUnresolvedCsv() {
  if (!requirePermission("reconcile.export", "Недостаточно прав: роль не позволяет выгружать неразнесенные операции.")) return;
  const unresolved = getOperationsForReconcile().filter((op) => op.unresolved);

  if (unresolved.length === 0) {
    els.reconcileStatus.textContent = "Неразнесенных операций нет.";
    return;
  }

  const headers = [
    "Дата",
    "Контрагент",
    "Комментарий",
    "Статья из файла",
    "Сумма",
    "Группа",
    "Подобранная статья",
  ];

  const lines = unresolved.map((op) => [
    toDateInputValue(op.dateObj),
    op.counterparty || "",
    op.comment || "",
    op.articleInput || "",
    formatNumberForCsv(op.direction === "Выбытие" ? -op.amount : op.amount),
    op.direction,
    state.manualAssignments[op.rowId] || "",
  ]);

  const csv = [headers, ...lines]
    .map((line) => line.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(";"))
    .join("\n");

  triggerDownload(new Blob([csv], { type: "text/csv;charset=utf-8;" }), "dds-unresolved.csv");
}

function refreshReportActivityOptions() {
  const currentValue = els.activityFilter.value || "all";
  const activities = uniqueValues(
    state.articles.filter((row) => row.status !== "DELETE").map((row) => row.activity).filter(Boolean)
  );

  els.activityFilter.innerHTML = `<option value="all">Все</option>`;

  activities.forEach((activity) => {
    const option = document.createElement("option");
    option.value = activity;
    option.textContent = activity;
    els.activityFilter.append(option);
  });

  if (!activities.includes(UNKNOWN_ACTIVITY)) {
    const unknown = document.createElement("option");
    unknown.value = UNKNOWN_ACTIVITY;
    unknown.textContent = UNKNOWN_ACTIVITY;
    els.activityFilter.append(unknown);
  }

  const canRestore = [...els.activityFilter.options].some((option) => option.value === currentValue);
  els.activityFilter.value = canRestore ? currentValue : "all";
}

function renderArticlesTable() {
  const canManageArticles = hasPermission("articles.manage");
  const rows = getFilteredArticles();

  if (rows.length === 0) {
    els.articlesTableBody.innerHTML = `<tr><td colspan="8" class="empty">По фильтрам ничего не найдено.</td></tr>`;
    return;
  }

  els.articlesTableBody.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${escapeHtml(row.articleNoRaw)}</td>
        <td>${escapeHtml(row.name)}</td>
        <td>${escapeHtml(row.group)}</td>
        <td>${escapeHtml(row.activity)}</td>
        <td>${escapeHtml(row.description)}</td>
        <td>${escapeHtml(row.comment)}</td>
        <td><span class="badge ${row.status}">${statusLabel(row.status)}</span></td>
        <td>
          <div class="actions">
            <button class="secondary" type="button" data-action="edit" data-id="${row.id}" ${canManageArticles ? "" : "disabled"}>Редакт.</button>
            <button class="secondary" type="button" data-action="rename" data-id="${row.id}" ${canManageArticles ? "" : "disabled"}>Переим.</button>
            ${
              row.status === "DELETE"
                ? `<button class="secondary" type="button" data-action="restore" data-id="${row.id}" ${canManageArticles ? "" : "disabled"}>Восстановить</button>`
                : `<button class="secondary" type="button" data-action="delete" data-id="${row.id}" ${canManageArticles ? "" : "disabled"}>Удалить</button>`
            }
          </div>
        </td>
      </tr>
    `
    )
    .join("");
}

function getFilteredArticles() {
  const query = normalizeText(els.articleSearch.value);
  const group = els.articleGroupFilter.value;
  const activity = els.articleActivityFilter.value;
  const status = els.articleStatusFilter.value;

  return [...state.articles]
    .filter((row) => {
      const haystack = normalizeText(
        `${row.articleNoRaw} ${row.name} ${row.group} ${row.activity} ${row.description} ${row.comment}`
      );

      const byQuery = !query || haystack.includes(query);
      const byGroup = group === "all" || row.group === group;
      const byActivity = activity === "all" || row.activity === activity;
      const byStatus = status === "all" || row.status === status;

      return byQuery && byGroup && byActivity && byStatus;
    })
    .sort((a, b) => a.name.localeCompare(b.name, "ru"));
}

function refreshArticleFilterOptions() {
  updateSelectOptions(els.articleGroupFilter, state.articles.map((row) => row.group));
  updateSelectOptions(els.articleActivityFilter, state.articles.map((row) => row.activity));
}

function updateSelectOptions(selectElement, values) {
  const selectedValue = selectElement.value || "all";
  const options = uniqueValues(values.filter(Boolean));

  selectElement.innerHTML = `<option value="all">Все</option>`;

  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectElement.append(option);
  });

  const canRestore = [...selectElement.options].some((option) => option.value === selectedValue);
  selectElement.value = canRestore ? selectedValue : "all";
}

function openArticleForm(article) {
  if (!hasPermission("articles.manage")) return;
  els.articleForm.classList.remove("hidden");

  if (!article) {
    els.articleId.value = "";
    els.articleNoInput.value = "";
    els.articleNameInput.value = "";
    els.articleGroupInput.value = "Поступление";
    els.articleActivityInput.value = "01 Операционная деятельность";
    els.articleSourceInput.value = "";
    els.articleStatusInput.value = "ACTIVE";
    els.articleDescriptionInput.value = "";
    els.articleCommentInput.value = "";
    return;
  }

  els.articleId.value = String(article.id);
  els.articleNoInput.value = article.articleNoRaw;
  els.articleNameInput.value = article.name;
  els.articleGroupInput.value = article.group || "Поступление";
  els.articleActivityInput.value = article.activity || "";
  els.articleSourceInput.value = article.source || "";
  els.articleStatusInput.value = article.status || "ACTIVE";
  els.articleDescriptionInput.value = article.description || "";
  els.articleCommentInput.value = article.comment || "";
}

function closeArticleForm() {
  els.articleForm.classList.add("hidden");
  els.articleForm.reset();
  els.articleId.value = "";
}

function onArticleFormSubmit(event) {
  event.preventDefault();
  if (!requirePermission("articles.manage", "Недостаточно прав: роль не позволяет сохранять изменения статей.")) return;

  const id = Number(els.articleId.value);
  const name = els.articleNameInput.value.trim();

  if (!name) {
    alert("Введите название статьи.");
    return;
  }

  const payload = {
    articleNoRaw: els.articleNoInput.value.trim(),
    name,
    group: els.articleGroupInput.value,
    activity: els.articleActivityInput.value.trim() || "Не определено",
    description: els.articleDescriptionInput.value.trim(),
    source: els.articleSourceInput.value.trim(),
    comment: els.articleCommentInput.value.trim(),
    status: els.articleStatusInput.value,
  };

  let action = "ARTICLE_CREATED";
  let details = `Создана статья "${payload.name}"`;
  if (id) {
    const prev = state.articles.find((row) => row.id === id);
    state.articles = state.articles.map((row) => (row.id === id ? { ...row, ...payload } : row));
    action = "ARTICLE_UPDATED";
    details = `Обновлена статья "${prev?.name || payload.name}" -> "${payload.name}"`;
  } else {
    state.articles.push({
      id: getNextArticleId(),
      aliases: [],
      ...payload,
    });
  }

  logChange(action, "Статьи ДДС", details);
  persistAndRerenderAfterArticleChange();
  closeArticleForm();
}

function renameArticle(id) {
  if (!hasPermission("articles.manage")) return;
  const article = state.articles.find((item) => item.id === id);
  if (!article) return;

  const nextName = window.prompt("Новое название статьи", article.name);
  if (!nextName) return;

  const cleanName = nextName.trim();
  if (!cleanName) return;

  state.articles = state.articles.map((item) => {
    if (item.id !== id) return item;

    const aliases = uniqueValues([...(item.aliases || []), item.name].filter(Boolean));
    return { ...item, name: cleanName, aliases };
  });

  logChange("ARTICLE_RENAMED", "Статьи ДДС", `"${article.name}" -> "${cleanName}"`);
  persistAndRerenderAfterArticleChange();
}

function markArticleDeleted(id) {
  if (!hasPermission("articles.manage")) return;
  const article = state.articles.find((item) => item.id === id);
  if (!article) return;

  const confirmed = window.confirm(`Пометить статью "${article.name}" как удаленную?`);
  if (!confirmed) return;

  state.articles = state.articles.map((item) =>
    item.id === id ? { ...item, status: "DELETE" } : item
  );

  logChange("ARTICLE_DELETED", "Статьи ДДС", `Статья "${article.name}" помечена как удаленная`);
  persistAndRerenderAfterArticleChange();
}

function restoreArticle(id) {
  if (!hasPermission("articles.manage")) return;
  const article = state.articles.find((item) => item.id === id);
  state.articles = state.articles.map((item) => (item.id === id ? { ...item, status: "ACTIVE" } : item));
  logChange("ARTICLE_RESTORED", "Статьи ДДС", `Статья "${article?.name || id}" восстановлена`);
  persistAndRerenderAfterArticleChange();
}

function persistAndRerenderAfterArticleChange() {
  saveArticles(state.articles);
  refreshArticleFilterOptions();
  refreshReportActivityOptions();
  renderArticlesTable();
  renderReport();
}

function getNextArticleId() {
  return getNextId(state.articles);
}

function getNextId(items) {
  return items.reduce((max, row) => Math.max(max, Number(row.id) || 0), 0) + 1;
}

function resetReportFilters() {
  els.dateFromInput.value = "";
  els.dateToInput.value = "";
  els.activityFilter.value = "all";
  renderReport();
}

function downloadTemplateCsv() {
  const blob = new Blob([SAMPLE_OPERATIONS], { type: "text/csv;charset=utf-8;" });
  triggerDownload(blob, "dds-operations-template.csv");
}

function downloadReportCsv() {
  if (!requirePermission("report.export", "Недостаточно прав: роль не позволяет выгружать отчет ДДС.")) return;
  if (state.reportRows.length === 0) {
    els.fileStatus.textContent = "Сначала загрузите операции CSV, затем выгружайте отчет.";
    return;
  }

  const lines = [["Вид деятельности", "Статья ДДС", "Поступления", "Выбытия", "Чистый поток", "Операций"]];

  state.reportRows.forEach((row) => {
    lines.push([
      row.activity,
      row.article,
      formatNumberForCsv(row.inAmount),
      formatNumberForCsv(row.outAmount),
      formatNumberForCsv(row.net),
      String(row.count),
    ]);
  });

  const csv = lines
    .map((line) => line.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(";"))
    .join("\n");

  triggerDownload(new Blob([csv], { type: "text/csv;charset=utf-8;" }), "dds-report.csv");
}

function downloadManagementPackageCsv() {
  if (!requirePermission("report.export", "Недостаточно прав: роль не позволяет выгружать управленческий пакет.")) return;

  const filteredOperations = getFilteredOperations();
  const { reportRows, totalsByActivity, grandTotals } = aggregateByArticle(filteredOperations);
  const unresolvedRows = getOperationsForReconcile().filter((op) => op.unresolved);
  const activityRows = [
    { label: "01 Операционная деятельность", prefix: "01 " },
    { label: "02 Инвестиционная деятельность", prefix: "02 " },
    { label: "03 Финансовая деятельность", prefix: "03 " },
  ];
  const shortRows = activityRows.map((item) => ({
    label: item.label,
    ...summarizeTotalsByActivityPrefix(totalsByActivity, item.prefix),
  }));
  const entityById = new Map((state.banks.legalEntities || []).map((entity) => [entity.id, entity.name]));
  const entityRows = (state.banks.legalEntities || []).map((entity) => {
    const activeAccounts = (state.banks.accounts || []).filter(
      (account) => Number(account.legalEntityId) === Number(entity.id) && account.status !== "DELETED"
    );
    return {
      entity: entity.name,
      summary: summarizeEntity(activeAccounts),
    };
  });
  const accountRows = (state.banks.accounts || [])
    .filter((account) => account.status !== "DELETED")
    .map((account) => ({
      entity: entityById.get(account.legalEntityId) || "Без юрлица",
      account: account.name,
      summary: account.summary || null,
    }))
    .sort((a, b) => `${a.entity} ${a.account}`.localeCompare(`${b.entity} ${b.account}`, "ru"));
  const from = els.dateFromInput?.value || "";
  const to = els.dateToInput?.value || "";
  const reportGeneratedAt = formatDateTime(new Date().toISOString());

  const lines = [];
  lines.push(["Раздел", "Показатель", "Значение 1", "Значение 2", "Значение 3", "Значение 4", "Значение 5"]);
  lines.push(["Метаданные", "Сформировано", reportGeneratedAt, "", "", "", ""]);
  lines.push(["Метаданные", "Период отчета", `${from || "н/д"} - ${to || "н/д"}`, "", "", "", ""]);
  lines.push(["Метаданные", "Операций в выборке", String(filteredOperations.length), "", "", "", ""]);
  lines.push(["", "", "", "", "", "", ""]);

  lines.push(["Короткий ДДС", "Вид деятельности", "Поступления", "Выбытия", "Чистый поток", "", ""]);
  shortRows.forEach((row) => {
    lines.push([
      "Короткий ДДС",
      row.label,
      formatNumberForCsv(row.inAmount),
      formatNumberForCsv(row.outAmount),
      formatNumberForCsv(row.net),
      "",
      "",
    ]);
  });
  lines.push([
    "Короткий ДДС",
    "Итого по ДДС",
    formatNumberForCsv(grandTotals.inAmount),
    formatNumberForCsv(grandTotals.outAmount),
    formatNumberForCsv(grandTotals.net),
    "",
    "",
  ]);
  lines.push(["", "", "", "", "", "", ""]);

  lines.push(["Детальный ДДС", "Вид деятельности", "Статья ДДС", "Поступления", "Выбытия", "Чистый поток", "Операций"]);
  reportRows.forEach((row) => {
    lines.push([
      "Детальный ДДС",
      row.activity,
      row.article,
      formatNumberForCsv(row.inAmount),
      formatNumberForCsv(row.outAmount),
      formatNumberForCsv(row.net),
      String(row.count),
    ]);
  });
  lines.push(["", "", "", "", "", "", ""]);

  lines.push([
    "Сводка по юрлицам",
    "Юрлицо",
    "Начало месяца",
    "Конец месяца",
    "Остаток на последнюю дату",
    "Поступления",
    "Выбытия",
  ]);
  entityRows.forEach((row) => {
    const summary = row.summary;
    lines.push([
      "Сводка по юрлицам",
      row.entity,
      formatNumberForCsv(summary?.openingBalance),
      formatNumberForCsv(summary?.monthEndBalance),
      formatNumberForCsv(summary?.latestBalance),
      formatNumberForCsv(summary?.inflow || 0),
      formatNumberForCsv(summary?.outflow || 0),
    ]);
  });
  lines.push(["", "", "", "", "", "", ""]);

  lines.push([
    "Сводка по банкам",
    "Юрлицо",
    "Счет",
    "Начало месяца",
    "Конец месяца",
    "Поступления",
    "Выбытия",
  ]);
  accountRows.forEach((row) => {
    lines.push([
      "Сводка по банкам",
      row.entity,
      row.account,
      formatNumberForCsv(row.summary?.openingBalance),
      formatNumberForCsv(row.summary?.monthEndBalance),
      formatNumberForCsv(row.summary?.inflow || 0),
      formatNumberForCsv(row.summary?.outflow || 0),
    ]);
  });
  lines.push(["", "", "", "", "", "", ""]);

  lines.push([
    "Неразнесенные платежи",
    "Дата",
    "Контрагент",
    "Комментарий",
    "Статья из файла",
    "Сумма",
    "Группа",
  ]);
  unresolvedRows.forEach((op) => {
    lines.push([
      "Неразнесенные платежи",
      toDateInputValue(op.dateObj),
      op.counterparty || "",
      op.comment || "",
      op.articleInput || "",
      formatNumberForCsv(op.direction === "Выбытие" ? -op.amount : op.amount),
      op.direction,
    ]);
  });

  const csv = lines
    .map((line) => line.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(";"))
    .join("\n");
  triggerDownload(new Blob([csv], { type: "text/csv;charset=utf-8;" }), "dds-management-package.csv");
  logChange("MANAGEMENT_PACKAGE_EXPORTED", "Сервис", `Экспортирован пакет: операций ${filteredOperations.length}, неразнесенных ${unresolvedRows.length}`);
  if (els.serviceStatus) {
    els.serviceStatus.textContent = `Управленческий пакет выгружен: ${reportGeneratedAt}.`;
  }
}

function downloadArticlesCsv() {
  if (!requirePermission("articles.export", "Недостаточно прав: роль не позволяет выгружать справочник статей.")) return;
  const headers = [
    "№ статьи",
    "Статья ДДС",
    "Группа",
    "Вид деятельности",
    "Описание",
    "Источник",
    "Комментарий",
    "Статус",
  ];

  const lines = state.articles
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "ru"))
    .map((row) => [
      row.articleNoRaw,
      row.name,
      row.group,
      row.activity,
      row.description,
      row.source,
      row.comment,
      statusLabel(row.status),
    ]);

  const csv = [headers, ...lines]
    .map((line) => line.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(";"))
    .join("\n");

  triggerDownload(new Blob([csv], { type: "text/csv;charset=utf-8;" }), "dds-articles.csv");
}

function renderChangeLog() {
  if (!els.changeLogTableBody || !els.changeLogStatus) return;

  const query = normalizeText(els.changeLogSearch?.value || "");
  const actionFilter = String(els.changeLogActionFilter?.value || "all");
  const roleFilter = String(els.changeLogRoleFilter?.value || "all");
  const dateFrom = els.changeLogDateFrom?.value ? parseFlexibleDate(els.changeLogDateFrom.value) : null;
  const dateTo = els.changeLogDateTo?.value ? parseFlexibleDate(els.changeLogDateTo.value) : null;
  if (dateTo) {
    dateTo.setHours(23, 59, 59, 999);
  }

  const filtered = state.changeLog.filter((entry) => {
    if (actionFilter !== "all" && entry.action !== actionFilter) return false;
    if (roleFilter !== "all" && entry.role !== roleFilter) return false;

    const entryDate = parseFlexibleDate(entry.timestamp);
    if (dateFrom && (!entryDate || entryDate < dateFrom)) return false;
    if (dateTo && (!entryDate || entryDate > dateTo)) return false;

    if (query) {
      const haystack = normalizeText(`${entry.user} ${entry.action} ${entry.entity} ${entry.details}`);
      if (!haystack.includes(query)) return false;
    }

    return true;
  });

  const actions = uniqueValues(state.changeLog.map((entry) => entry.action).filter(Boolean));
  const currentAction = String(els.changeLogActionFilter.value || "all");
  els.changeLogActionFilter.innerHTML = `<option value="all">Все</option>${actions
    .map((action) => `<option value="${escapeHtml(action)}">${escapeHtml(action)}</option>`)
    .join("")}`;
  const canRestoreAction = [...els.changeLogActionFilter.options].some((opt) => opt.value === currentAction);
  els.changeLogActionFilter.value = canRestoreAction ? currentAction : "all";

  if (filtered.length === 0) {
    els.changeLogTableBody.innerHTML = `<tr><td colspan="6" class="empty">По фильтрам записей нет.</td></tr>`;
  } else {
    els.changeLogTableBody.innerHTML = filtered
      .map(
        (entry) => `
        <tr>
          <td>${escapeHtml(formatDateTime(entry.timestamp))}</td>
          <td>${escapeHtml(entry.user || "Не указан")}</td>
          <td>${escapeHtml(roleLabel(entry.role))}</td>
          <td>${escapeHtml(entry.action)}</td>
          <td>${escapeHtml(entry.entity)}</td>
          <td>${escapeHtml(entry.details || "-")}</td>
        </tr>
      `
      )
      .join("");
  }

  els.changeLogStatus.textContent = `Записей: ${filtered.length} (всего: ${state.changeLog.length}).`;
}

function logChange(action, entity, details) {
  const safeAction = String(action || "").trim();
  const safeEntity = String(entity || "").trim();
  if (!safeAction || !safeEntity) return;

  const entry = {
    id: getNextId(state.changeLog),
    timestamp: new Date().toISOString(),
    user: normalizeUserName(state.access.currentUser),
    role: state.access.currentRole,
    action: safeAction,
    entity: safeEntity,
    details: String(details || "").trim(),
  };

  state.changeLog.unshift(entry);
  if (state.changeLog.length > CHANGE_LOG_LIMIT) {
    state.changeLog = state.changeLog.slice(0, CHANGE_LOG_LIMIT);
  }

  saveChangeLog(state.changeLog);
  renderChangeLog();
}

function exportChangeLogCsv() {
  if (!requirePermission("changelog.export", "Недостаточно прав: роль не позволяет выгружать журнал изменений.")) return;

  const rows = state.changeLog;
  if (rows.length === 0) {
    if (els.changeLogStatus) els.changeLogStatus.textContent = "Журнал пуст.";
    return;
  }

  const headers = ["Время", "Пользователь", "Роль", "Действие", "Объект", "Детали"];
  const lines = rows.map((entry) => [
    formatDateTime(entry.timestamp),
    entry.user || "Не указан",
    roleLabel(entry.role),
    entry.action,
    entry.entity,
    entry.details || "",
  ]);

  const csv = [headers, ...lines]
    .map((line) => line.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(";"))
    .join("\n");

  triggerDownload(new Blob([csv], { type: "text/csv;charset=utf-8;" }), "dds-change-log.csv");
}

function clearChangeLog() {
  if (!requirePermission("changelog.clear", "Недостаточно прав: только Админ может очищать журнал изменений.")) return;
  if (state.changeLog.length === 0) return;

  const firstConfirm = window.confirm("Очистить журнал изменений полностью?");
  if (!firstConfirm) return;

  const phrase = window.prompt("Для подтверждения введите: ОЧИСТИТЬ ЖУРНАЛ");
  if (phrase !== "ОЧИСТИТЬ ЖУРНАЛ") {
    alert("Очистка отменена: подтверждение не совпало.");
    return;
  }

  state.changeLog = [];
  saveChangeLog(state.changeLog);
  renderChangeLog();
}

function triggerDownload(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportAppBackupFile() {
  if (!requirePermission("access.users.manage", "Недостаточно прав: только Админ может экспортировать полный бэкап.")) return;
  const payload = {
    format: "dds-mvp-backup",
    version: 1,
    exportedAt: new Date().toISOString(),
    appTitle: "DDS MVP",
    data: {
      articles: state.articles,
      banks: state.banks,
      plan: state.plan,
      obligations: state.obligations,
      analytics: { ...state.analytics, latest: null },
      access: state.access,
      changeLog: state.changeLog,
      runtime: buildRuntimeSnapshot(),
    },
  };
  const json = JSON.stringify(payload, null, 2);
  triggerDownload(new Blob([json], { type: "application/json;charset=utf-8;" }), "dds-backup.json");
  logChange("BACKUP_EXPORTED", "Сервис", "Экспортирован полный бэкап приложения");
  if (els.serviceStatus) {
    els.serviceStatus.textContent = `Бэкап экспортирован: ${formatDateTime(payload.exportedAt)}.`;
  }
}

async function importAppBackupFile() {
  if (!requirePermission("access.users.manage", "Недостаточно прав: только Админ может восстанавливать бэкап.")) return;
  const [file] = els.importBackupFile?.files || [];
  if (!file) {
    alert("Выберите JSON-файл бэкапа.");
    return;
  }

  try {
    const rawText = await readTextFileAsUtf8(file);
    const parsed = JSON.parse(rawText);
    const data =
      parsed && typeof parsed === "object" && parsed.data && typeof parsed.data === "object" ? parsed.data : parsed;

    if (!data || typeof data !== "object") {
      throw new Error("В файле отсутствует блок данных.");
    }

    const firstConfirm = window.confirm(
      "Восстановить состояние из бэкапа? Текущие данные приложения будут заменены."
    );
    if (!firstConfirm) return;

    const phrase = window.prompt("Для подтверждения введите: ВОССТАНОВИТЬ БЭКАП");
    if (phrase !== "ВОССТАНОВИТЬ БЭКАП") {
      alert("Восстановление отменено: подтверждение не совпало.");
      return;
    }

    applyBackupPayload(data);
    logChange("BACKUP_RESTORED", "Сервис", `Восстановление из файла ${file.name}`);
    if (els.importBackupFile) {
      els.importBackupFile.value = "";
    }
    if (els.serviceStatus) {
      els.serviceStatus.textContent = `Бэкап восстановлен из файла ${file.name}.`;
    }
  } catch (error) {
    alert(`Ошибка восстановления: ${error.message || "неизвестная ошибка"}`);
  }
}

function applyBackupPayload(data) {
  const fallbackArticles = parseRawArticles(RAW_ARTICLES);
  const fallbackBanks = { legalEntities: [], accounts: [] };
  const fallbackRuntime = createDefaultRuntimeState();

  state.articles =
    Array.isArray(data.articles) && data.articles.length > 0
      ? data.articles.map((row, index) => normalizeArticle(row, index))
      : fallbackArticles;
  state.banks = normalizeBanksState(data.banks, fallbackBanks);
  state.plan = normalizePlanState(data.plan, createDefaultPlanState());
  state.obligations = normalizeObligationsState(data.obligations, createDefaultObligationsState());
  state.analytics = normalizeAnalyticsState(data.analytics, createDefaultAnalyticsState());
  state.access = normalizeAccessStatePayload(data.access);
  state.changeLog = normalizeChangeLogPayload(data.changeLog);
  const runtimeSource =
    data.runtime && typeof data.runtime === "object"
      ? data.runtime
      : {
          operationsRaw: data.operationsRaw,
          manualAssignments: data.manualAssignments,
          reportFilters: data.reportFilters,
        };
  const restoredRuntime = normalizeRuntimeStatePayload(runtimeSource, fallbackRuntime);
  state.operationsRaw = restoredRuntime.operationsRaw;
  state.manualAssignments = restoredRuntime.manualAssignments;
  state.analytics.latest = null;
  state.planUi.editingIndex = -1;

  saveArticles(state.articles);
  saveBanksState(state.banks);
  savePlanState(state.plan);
  saveObligationsState(state.obligations);
  saveAnalyticsState(state.analytics);
  saveAccessState(state.access);
  saveChangeLog(state.changeLog);
  saveRuntimeState(restoredRuntime);

  cleanupLegacyPlaceholderEntities(true);
  refreshAccessUserOptions(state.access.currentUser);
  if (els.accessRoleSelect) {
    els.accessRoleSelect.value = state.access.currentRole;
  }
  refreshBankEntitySelect();
  refreshArticleFilterOptions();
  refreshReportActivityOptions();
  applyRuntimeStateToControls(restoredRuntime);
  if (els.fileStatus) {
    els.fileStatus.textContent =
      restoredRuntime.operationsRaw.length > 0
        ? `Восстановлено операций из бэкапа: ${restoredRuntime.operationsRaw.length}.`
        : "Файл не загружен.";
  }
  renderBanksTab();
  renderArticlesTable();
  renderReport();
  renderPlanTab();
  renderObligationsTab();
  renderAnalyticsTab();
  renderReconcileTable();
  renderChangeLog();
  applyRoleAccess();
}

function buildRuntimeSnapshot() {
  return {
    operationsRaw: serializeOperationsForStorage(state.operationsRaw),
    manualAssignments: { ...(state.manualAssignments || {}) },
    reportFilters: {
      dateFrom: String(els.dateFromInput?.value || ""),
      dateTo: String(els.dateToInput?.value || ""),
      activity: String(els.activityFilter?.value || "all"),
      unresolvedOnly: Boolean(els.unresolvedOnly?.checked),
    },
  };
}

function persistRuntimeState() {
  saveRuntimeState(buildRuntimeSnapshot());
}

function createDefaultRuntimeState() {
  return {
    operationsRaw: [],
    manualAssignments: {},
    reportFilters: {
      dateFrom: "",
      dateTo: "",
      activity: "all",
      unresolvedOnly: true,
    },
  };
}

function applyRuntimeStateToControls(runtimeStateRaw) {
  const runtimeStateSafe = normalizeRuntimeStatePayload(runtimeStateRaw, createDefaultRuntimeState());
  if (els.dateFromInput) els.dateFromInput.value = runtimeStateSafe.reportFilters.dateFrom;
  if (els.dateToInput) els.dateToInput.value = runtimeStateSafe.reportFilters.dateTo;
  if (els.activityFilter) {
    const desired = runtimeStateSafe.reportFilters.activity || "all";
    const exists = [...els.activityFilter.options].some((option) => option.value === desired);
    els.activityFilter.value = exists ? desired : "all";
  }
  if (els.unresolvedOnly) {
    els.unresolvedOnly.checked = Boolean(runtimeStateSafe.reportFilters.unresolvedOnly);
  }
}

function loadRuntimeState() {
  const fallback = createDefaultRuntimeState();
  try {
    const raw = localStorage.getItem(STORAGE_RUNTIME_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return normalizeRuntimeStatePayload(parsed, fallback);
  } catch (error) {
    console.warn("Cannot load runtime state from localStorage", error);
    return fallback;
  }
}

function saveRuntimeState(runtimeState) {
  try {
    localStorage.setItem(STORAGE_RUNTIME_KEY, JSON.stringify(runtimeState));
  } catch (error) {
    console.warn("Cannot save runtime state to localStorage", error);
  }
}

function normalizeRuntimeStatePayload(rawState, fallback) {
  if (!rawState || typeof rawState !== "object") return fallback;
  const operationsRaw = normalizeOperationsRowsFromStorage(rawState.operationsRaw);
  const manualAssignments = normalizeManualAssignmentsPayload(rawState.manualAssignments, operationsRaw);
  const rawFilters = rawState.reportFilters && typeof rawState.reportFilters === "object" ? rawState.reportFilters : {};
  const reportFilters = {
    dateFrom: parseFlexibleDate(rawFilters.dateFrom || "")
      ? toDateInputValue(parseFlexibleDate(rawFilters.dateFrom || ""))
      : "",
    dateTo: parseFlexibleDate(rawFilters.dateTo || "")
      ? toDateInputValue(parseFlexibleDate(rawFilters.dateTo || ""))
      : "",
    activity: String(rawFilters.activity || "all"),
    unresolvedOnly: rawFilters.unresolvedOnly === undefined ? true : Boolean(rawFilters.unresolvedOnly),
  };
  return {
    operationsRaw,
    manualAssignments,
    reportFilters,
  };
}

function serializeOperationsForStorage(operations) {
  if (!Array.isArray(operations)) return [];
  return operations.map((row) => ({
    rowId: Number(row?.rowId) || 0,
    dateRaw: String(row?.dateRaw || toDateInputValue(row?.dateObj) || ""),
    counterparty: String(row?.counterparty || ""),
    comment: String(row?.comment || ""),
    articleInput: String(row?.articleInput || ""),
    amount: Number(row?.amount) || 0,
    direction: String(row?.direction || ""),
  }));
}

function normalizeOperationsRowsFromStorage(rawRows) {
  if (!Array.isArray(rawRows)) return [];
  return rawRows
    .map((row, index) => {
      const dateSource = row?.dateRaw || row?.dateObj || "";
      const dateObj = parseFlexibleDate(dateSource);
      const amount = Number(row?.amount);
      if (!dateObj || !Number.isFinite(amount)) return null;
      const directionRaw = String(row?.direction || "");
      const direction = directionRaw === "Выбытие" || directionRaw === "Поступление" ? directionRaw : amount < 0 ? "Выбытие" : "Поступление";
      return {
        rowId: Number(row?.rowId) || index + 2,
        dateRaw: String(row?.dateRaw || toDateInputValue(dateObj)),
        dateObj,
        counterparty: String(row?.counterparty || ""),
        comment: String(row?.comment || ""),
        articleInput: String(row?.articleInput || ""),
        amount: Math.abs(amount),
        direction,
      };
    })
    .filter(Boolean);
}

function normalizeManualAssignmentsPayload(rawAssignments, operationsRaw) {
  const allowedIds = new Set((operationsRaw || []).map((row) => Number(row.rowId)));
  if (!rawAssignments || typeof rawAssignments !== "object") return {};
  return Object.entries(rawAssignments).reduce((acc, [rowIdRaw, articleName]) => {
    const rowId = Number(rowIdRaw);
    const name = String(articleName || "").trim();
    if (!Number.isFinite(rowId) || !allowedIds.has(rowId) || !name) return acc;
    acc[rowId] = name;
    return acc;
  }, {});
}

function normalizeAccessStatePayload(rawAccess) {
  const fallback = { currentRole: "ADMIN", currentUser: "Не указан", users: ["Не указан"] };
  if (!rawAccess || typeof rawAccess !== "object") return fallback;
  const role = String(rawAccess.currentRole || "").trim().toUpperCase();
  const user = normalizeUserName(rawAccess.currentUser || fallback.currentUser);
  const users = normalizeUsersList(rawAccess.users, user);
  return {
    currentRole: ROLE_CONFIG[role] ? role : fallback.currentRole,
    currentUser: users.find((name) => normalizeText(name) === normalizeText(user)) || users[0],
    users,
  };
}

function normalizeChangeLogPayload(rawLog) {
  if (!Array.isArray(rawLog)) return [];
  return rawLog
    .map((row, idx) => ({
      id: Number(row?.id) || idx + 1,
      timestamp: String(row?.timestamp || ""),
      user: normalizeUserName(row?.user),
      role: ROLE_CONFIG[String(row?.role || "").toUpperCase()] ? String(row.role).toUpperCase() : "VIEWER",
      action: String(row?.action || "").trim(),
      entity: String(row?.entity || "").trim(),
      details: String(row?.details || "").trim(),
    }))
    .filter((row) => row.action && row.entity)
    .sort((a, b) => String(b.timestamp).localeCompare(String(a.timestamp)));
}

function parseRawArticles(raw) {
  return raw
    .trim()
    .split("\n")
    .map((line, idx) => {
      const [articleNoRaw, name, group, activity, description, source, comment] = line
        .split("|")
        .map((cell) => cell.trim());

      return {
        id: idx + 1,
        aliases: [],
        articleNoRaw,
        name,
        group,
        activity,
        description,
        source,
        comment,
        status: resolveArticleStatus(articleNoRaw, comment),
      };
    });
}

function resolveArticleStatus(articleNoRaw, comment) {
  const raw = normalizeText(articleNoRaw);
  const cmt = normalizeText(comment);

  if (raw.startsWith("удалить")) return "DELETE";
  if (raw.startsWith("поменять")) return "RENAME";
  if (cmt.includes("не актуальный") || cmt.includes("неактуальный")) return "INACTIVE";
  return "ACTIVE";
}

function loadArticles() {
  try {
    const raw = localStorage.getItem(STORAGE_ARTICLES_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((row, idx) => normalizeArticle(row, idx));
      }
    }
  } catch (error) {
    console.warn("Cannot load articles from localStorage", error);
  }

  return parseRawArticles(RAW_ARTICLES);
}

function saveArticles(articles) {
  try {
    localStorage.setItem(STORAGE_ARTICLES_KEY, JSON.stringify(articles));
  } catch (error) {
    console.warn("Cannot save articles to localStorage", error);
  }
}

function createDefaultPlanState() {
  return {
    items: [],
    openings: [],
    assumptions: [{ scenario: "base", inflowFactor: 1, outflowFactor: 1 }],
    selectedScenario: "base",
    probabilityFilter: "all",
    sourceFiles: {
      items: "",
      openings: "",
      assumptions: "",
    },
  };
}

function createDefaultObligationsState() {
  return {
    items: [],
    settings: {
      lookbackMonths: 6,
      minRepeats: 2,
      minAmount: 300,
      horizonDays: 30,
    },
  };
}

function loadObligationsState() {
  const fallback = createDefaultObligationsState();
  try {
    const raw = localStorage.getItem(STORAGE_OBLIGATIONS_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return normalizeObligationsState(parsed, fallback);
  } catch (error) {
    console.warn("Cannot load obligations state from localStorage", error);
    return fallback;
  }
}

function saveObligationsState(obligationsState) {
  try {
    localStorage.setItem(STORAGE_OBLIGATIONS_KEY, JSON.stringify(obligationsState));
  } catch (error) {
    console.warn("Cannot save obligations state to localStorage", error);
  }
}

function normalizeObligationsState(rawState, fallback) {
  if (!rawState || typeof rawState !== "object") return fallback;
  const items = Array.isArray(rawState.items)
    ? rawState.items
        .map((item, idx) => {
          const amount = toMaybeNumber(item?.amount);
          if (!Number.isFinite(amount) || amount <= 0) return null;
          const startMonth = normalizeMonthKey(item?.startMonth);
          const endMonth = normalizeMonthKey(item?.endMonth);
          if (!startMonth) return null;
          return {
            id: Number(item?.id) || idx + 1,
            name: String(item?.name || "").trim() || `Обязательный платеж ${idx + 1}`,
            category: normalizeObligationCategory(item?.category),
            legalEntityId: Number(item?.legalEntityId) || 0,
            bankAccountId: Number(item?.bankAccountId) || 0,
            counterparty: String(item?.counterparty || "").trim(),
            amount: Math.abs(amount),
            dayOfMonth: normalizeIntInRange(item?.dayOfMonth, 10, 1, 31),
            startMonth,
            endMonth: endMonth && endMonth >= startMonth ? endMonth : "",
            active: item?.active === undefined ? true : Boolean(item.active),
            comment: String(item?.comment || "").trim(),
            source: String(item?.source || "manual") === "suggested" ? "suggested" : "manual",
            createdAt: String(item?.createdAt || ""),
          };
        })
        .filter(Boolean)
    : [];

  const rawSettings = rawState.settings && typeof rawState.settings === "object" ? rawState.settings : {};
  const settings = {
    lookbackMonths: normalizeIntInRange(rawSettings.lookbackMonths, fallback.settings.lookbackMonths, 2, 24),
    minRepeats: normalizeIntInRange(rawSettings.minRepeats, fallback.settings.minRepeats, 2, 12),
    minAmount: Math.max(0, Number(rawSettings.minAmount) || fallback.settings.minAmount),
    horizonDays: normalizeIntInRange(rawSettings.horizonDays, fallback.settings.horizonDays, 7, 90),
  };

  return {
    items: sortObligations(items),
    settings,
  };
}

function loadPlanState() {
  const fallback = createDefaultPlanState();
  try {
    const raw = localStorage.getItem(STORAGE_PLAN_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return fallback;

    return normalizePlanState(parsed, fallback);
  } catch (error) {
    console.warn("Cannot load plan state from localStorage", error);
    return fallback;
  }
}

function savePlanState(planState) {
  try {
    localStorage.setItem(STORAGE_PLAN_KEY, JSON.stringify(planState));
  } catch (error) {
    console.warn("Cannot save plan state to localStorage", error);
  }
}

function normalizePlanState(rawState, fallback) {
  if (!rawState || typeof rawState !== "object") return fallback;

  const items = Array.isArray(rawState.items)
    ? rawState.items
        .map((item) => {
          const month = normalizeMonthKey(item?.month || item?.date || "");
          const amount = toMaybeNumber(item?.amount);
          if (!month || !Number.isFinite(amount)) return null;
          const dateObj = parseFlexibleDate(item?.date || "");
          return {
            month,
            date: dateObj ? toDateInputValue(dateObj) : "",
            legalEntity: String(item?.legalEntity || "").trim(),
            bankAccount: String(item?.bankAccount || "").trim(),
            activity: String(item?.activity || "").trim() || "Не определено",
            ddsArticle: String(item?.ddsArticle || "").trim(),
            type: resolvePlanType(item?.type, amount),
            amount: Math.abs(amount),
            probability: normalizePlanProbability(item?.probability),
            scenario: normalizePlanScenario(item?.scenario || "base"),
            comment: String(item?.comment || "").trim(),
          };
        })
        .filter(Boolean)
    : [];

  const openings = Array.isArray(rawState.openings)
    ? rawState.openings
        .map((row) => {
          const month = normalizeMonthKey(row?.month);
          const openingBalance = toMaybeNumber(row?.openingBalance);
          if (!month || !Number.isFinite(openingBalance)) return null;
          return {
            month,
            legalEntity: String(row?.legalEntity || "").trim(),
            bankAccount: String(row?.bankAccount || "").trim(),
            openingBalance,
          };
        })
        .filter(Boolean)
    : [];

  const assumptions = Array.isArray(rawState.assumptions)
    ? rawState.assumptions
        .map((row) => {
          const scenario = normalizePlanScenario(row?.scenario || "base");
          const inflowFactor = toMaybeNumber(row?.inflowFactor);
          const outflowFactor = toMaybeNumber(row?.outflowFactor);
          if (!scenario || !Number.isFinite(inflowFactor) || !Number.isFinite(outflowFactor)) return null;
          return {
            scenario,
            inflowFactor,
            outflowFactor,
          };
        })
        .filter(Boolean)
    : [];

  const sourceFiles =
    rawState.sourceFiles && typeof rawState.sourceFiles === "object"
      ? {
          items: String(rawState.sourceFiles.items || ""),
          openings: String(rawState.sourceFiles.openings || ""),
          assumptions: String(rawState.sourceFiles.assumptions || ""),
        }
      : { ...fallback.sourceFiles };

  const normalized = {
    items: sortPlanItems(items),
    openings,
    assumptions: assumptions.length > 0 ? assumptions : fallback.assumptions,
    selectedScenario: normalizePlanScenario(rawState.selectedScenario || fallback.selectedScenario),
    probabilityFilter: ["all", "high", "medium-high"].includes(String(rawState.probabilityFilter || ""))
      ? String(rawState.probabilityFilter)
      : fallback.probabilityFilter,
    sourceFiles,
  };

  const scenarios = uniqueValues(
    [...normalized.assumptions.map((row) => normalizePlanScenario(row.scenario)), ...normalized.items.map((row) => row.scenario), "base"]
      .filter(Boolean)
  );
  if (!scenarios.includes(normalized.selectedScenario)) {
    normalized.selectedScenario = scenarios[0] || "base";
  }
  return normalized;
}

function createDefaultAnalyticsState() {
  return {
    dateFrom: "",
    dateTo: "",
    compareMode: "analog",
    forecastHorizon: 30,
    forecastMode: "plan",
    scenario: "base",
    openingBalance: 0,
    safeBalanceMode: "fixed",
    safeBalanceFixed: 20000,
    safeBalancePercent: 30,
    top1Threshold: 40,
    top3Threshold: 70,
    expenseShareThreshold: 30,
    investmentLoadThreshold: 25,
    outflowSurgeThreshold: 30,
    outflowSurgeLookback: 3,
    scenarioOptimisticInflow: 10,
    scenarioOptimisticOutflow: 5,
    scenarioConservativeInflow: 15,
    scenarioConservativeOutflow: 10,
    showAllFindings: false,
    latest: null,
  };
}

function loadAnalyticsState() {
  const fallback = createDefaultAnalyticsState();
  try {
    const raw = localStorage.getItem(STORAGE_ANALYTICS_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return fallback;
    return normalizeAnalyticsState(parsed, fallback);
  } catch (error) {
    console.warn("Cannot load analytics state from localStorage", error);
    return fallback;
  }
}

function saveAnalyticsState(analyticsState) {
  try {
    const payload = { ...(analyticsState || {}) };
    delete payload.latest;
    localStorage.setItem(STORAGE_ANALYTICS_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn("Cannot save analytics state to localStorage", error);
  }
}

function normalizeAnalyticsState(rawState, fallback) {
  return {
    dateFrom: parseFlexibleDate(rawState.dateFrom || "")
      ? toDateInputValue(parseFlexibleDate(rawState.dateFrom))
      : fallback.dateFrom,
    dateTo: parseFlexibleDate(rawState.dateTo || "")
      ? toDateInputValue(parseFlexibleDate(rawState.dateTo))
      : fallback.dateTo,
    compareMode: normalizeAnalyticsCompareMode(rawState.compareMode || fallback.compareMode),
    forecastHorizon: normalizeIntInRange(rawState.forecastHorizon, fallback.forecastHorizon, 7, 90),
    forecastMode: normalizeAnalyticsForecastMode(rawState.forecastMode || fallback.forecastMode),
    scenario: normalizeAnalyticsScenario(rawState.scenario || fallback.scenario),
    openingBalance: Number.isFinite(Number(rawState.openingBalance)) ? Number(rawState.openingBalance) : fallback.openingBalance,
    safeBalanceMode: normalizeSafeBalanceMode(rawState.safeBalanceMode || fallback.safeBalanceMode),
    safeBalanceFixed: Number.isFinite(Number(rawState.safeBalanceFixed))
      ? Number(rawState.safeBalanceFixed)
      : fallback.safeBalanceFixed,
    safeBalancePercent: normalizeIntInRange(rawState.safeBalancePercent, fallback.safeBalancePercent, 1, 500),
    top1Threshold: normalizeIntInRange(rawState.top1Threshold, fallback.top1Threshold, 1, 100),
    top3Threshold: normalizeIntInRange(rawState.top3Threshold, fallback.top3Threshold, 1, 100),
    expenseShareThreshold: normalizeIntInRange(rawState.expenseShareThreshold, fallback.expenseShareThreshold, 1, 100),
    investmentLoadThreshold: normalizeIntInRange(
      rawState.investmentLoadThreshold,
      fallback.investmentLoadThreshold,
      1,
      100
    ),
    outflowSurgeThreshold: normalizeIntInRange(rawState.outflowSurgeThreshold, fallback.outflowSurgeThreshold, 1, 300),
    outflowSurgeLookback: normalizeIntInRange(rawState.outflowSurgeLookback, fallback.outflowSurgeLookback, 1, 12),
    scenarioOptimisticInflow: normalizeIntInRange(
      rawState.scenarioOptimisticInflow,
      fallback.scenarioOptimisticInflow,
      0,
      200
    ),
    scenarioOptimisticOutflow: normalizeIntInRange(
      rawState.scenarioOptimisticOutflow,
      fallback.scenarioOptimisticOutflow,
      0,
      100
    ),
    scenarioConservativeInflow: normalizeIntInRange(
      rawState.scenarioConservativeInflow,
      fallback.scenarioConservativeInflow,
      0,
      100
    ),
    scenarioConservativeOutflow: normalizeIntInRange(
      rawState.scenarioConservativeOutflow,
      fallback.scenarioConservativeOutflow,
      0,
      200
    ),
    showAllFindings: Boolean(rawState.showAllFindings),
    latest: null,
  };
}

function loadAccessState() {
  const fallback = { currentRole: "ADMIN", currentUser: "Не указан", users: ["Не указан"] };

  try {
    const raw = localStorage.getItem(STORAGE_ACCESS_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return fallback;
    const role = String(parsed.currentRole || "").trim().toUpperCase();
    const user = normalizeUserName(parsed.currentUser || fallback.currentUser);
    const users = normalizeUsersList(parsed.users, user);
    return {
      currentRole: ROLE_CONFIG[role] ? role : fallback.currentRole,
      currentUser: users.find((name) => normalizeText(name) === normalizeText(user)) || users[0],
      users,
    };
  } catch (error) {
    console.warn("Cannot load access state from localStorage", error);
    return fallback;
  }
}

function loadChangeLog() {
  try {
    const raw = localStorage.getItem(STORAGE_CHANGE_LOG_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((row, idx) => ({
        id: Number(row?.id) || idx + 1,
        timestamp: String(row?.timestamp || ""),
        user: normalizeUserName(row?.user),
        role: ROLE_CONFIG[String(row?.role || "").toUpperCase()] ? String(row.role).toUpperCase() : "VIEWER",
        action: String(row?.action || "").trim(),
        entity: String(row?.entity || "").trim(),
        details: String(row?.details || "").trim(),
      }))
      .filter((row) => row.action && row.entity)
      .sort((a, b) => String(b.timestamp).localeCompare(String(a.timestamp)));
  } catch (error) {
    console.warn("Cannot load change log from localStorage", error);
    return [];
  }
}

function saveChangeLog(changeLog) {
  try {
    localStorage.setItem(STORAGE_CHANGE_LOG_KEY, JSON.stringify(changeLog || []));
  } catch (error) {
    console.warn("Cannot save change log to localStorage", error);
  }
}

function saveAccessState(accessState) {
  try {
    localStorage.setItem(STORAGE_ACCESS_KEY, JSON.stringify(accessState));
  } catch (error) {
    console.warn("Cannot save access state to localStorage", error);
  }
}

function loadBanksState() {
  const fallback = {
    legalEntities: [],
    accounts: [],
  };

  try {
    const raw = localStorage.getItem(STORAGE_BANKS_KEY);
    if (!raw) return fallback;

    const parsed = JSON.parse(raw);
    return normalizeBanksState(parsed, fallback);
  } catch (error) {
    console.warn("Cannot load banks from localStorage", error);
    return fallback;
  }
}

function saveBanksState(banksState) {
  try {
    localStorage.setItem(STORAGE_BANKS_KEY, JSON.stringify(banksState));
  } catch (error) {
    console.warn("Cannot save banks to localStorage", error);
  }
}

function normalizeBanksState(rawState, fallback) {
  if (!rawState || typeof rawState !== "object") return fallback;

  const legalEntities = Array.isArray(rawState.legalEntities)
    ? rawState.legalEntities
        .map((item, idx) => ({
          id: Number(item?.id) || idx + 1,
          name: String(item?.name || "").trim(),
        }))
        .filter((item) => item.name !== "")
    : [];

  const normalizedEntities = legalEntities.length > 0 ? legalEntities : fallback.legalEntities;

  let accounts = Array.isArray(rawState.accounts)
    ? rawState.accounts.map((account, idx) => normalizeBankAccount(account, idx))
    : [];

  // Cleanup for older versions that auto-created placeholders "Юрлицо 1..N".
  const hasOnlyLegacyPlaceholders =
    normalizedEntities.length > 0 &&
    normalizedEntities.every((entity) => /^Юрлицо\s+\d+$/i.test(entity.name));

  if (hasOnlyLegacyPlaceholders) {
    accounts = accounts.map((account) => ({ ...account, legalEntityId: 0 }));
    return {
      legalEntities: [],
      accounts,
    };
  }

  const entityIds = new Set(normalizedEntities.map((entity) => entity.id));
  const defaultEntityId = normalizedEntities[0]?.id || 0;
  accounts = accounts.map((account) =>
    entityIds.has(account.legalEntityId) || defaultEntityId === 0
      ? account
      : { ...account, legalEntityId: defaultEntityId }
  );

  return {
    legalEntities: normalizedEntities,
    accounts,
  };
}

function cleanupLegacyPlaceholderEntities(persist) {
  const entities = state.banks.legalEntities || [];
  const onlyPlaceholders =
    entities.length > 0 && entities.every((entity) => /^Юрлицо\s+\d+$/i.test(String(entity.name || "").trim()));

  if (!onlyPlaceholders) return;

  state.banks.legalEntities = [];
  state.banks.accounts = (state.banks.accounts || []).map((account) => ({ ...account, legalEntityId: 0 }));

  if (persist) {
    saveBanksState(state.banks);
  }
}

function sanitizePersistedTransactionBalances(transactions) {
  if (!Array.isArray(transactions) || transactions.length === 0) return transactions;

  const hasNonZeroMovement = transactions.some(
    (tx) => Number.isFinite(tx?.amount) && Math.abs(Number(tx.amount)) > 0.000001
  );
  if (!hasNonZeroMovement) return transactions;

  const hasAnyZeroBalance = transactions.some((tx) => tx?.balance === 0);
  const hasAnyNonZeroBalance = transactions.some(
    (tx) => Number.isFinite(tx?.balance) && Math.abs(Number(tx.balance)) > 0.000001
  );

  // Migration guard:
  // old versions converted null balances to 0 on reload.
  // If all parsed balances are exactly zero while movements are non-zero,
  // treat those zeros as "no balance provided".
  if (!hasAnyZeroBalance || hasAnyNonZeroBalance) return transactions;

  return transactions.map((tx) => (tx.balance === 0 ? { ...tx, balance: null } : tx));
}

function normalizeBankAccount(account, idx) {
  const legacyTransactions = sanitizePersistedTransactionBalances(
    Array.isArray(account?.transactions)
    ? account.transactions
        .map((tx, txIdx) => ({
          idx: Number(tx?.idx) || txIdx,
          dateObj: parseFlexibleDate(tx?.dateObj || tx?.dateRaw || ""),
          altDateObj: parseFlexibleDate(tx?.altDateObj || ""),
          amount: Number(tx?.amount),
          balance: toMaybeNumber(tx?.balance),
        }))
        .filter((tx) => tx.dateObj && Number.isFinite(tx.amount))
    : []
  );

  let monthlyStatements = {};

  if (account?.monthlyStatements && typeof account.monthlyStatements === "object") {
    monthlyStatements = Object.entries(account.monthlyStatements).reduce((acc, [rawMonth, rawStatement]) => {
      const month = normalizeMonthKey(rawMonth || rawStatement?.month);
      if (!month) return acc;

      const statementTransactions = sanitizePersistedTransactionBalances(
        Array.isArray(rawStatement?.transactions)
        ? rawStatement.transactions
            .map((tx, txIdx) => ({
              idx: Number(tx?.idx) || txIdx,
              dateObj: parseFlexibleDate(tx?.dateObj || tx?.dateRaw || ""),
              altDateObj: parseFlexibleDate(tx?.altDateObj || ""),
              amount: Number(tx?.amount),
              balance: toMaybeNumber(tx?.balance),
            }))
            .filter((tx) => tx.dateObj && Number.isFinite(tx.amount))
        : []
      );

      acc[month] = {
        month,
        fileName: String(rawStatement?.fileName || account?.fileName || ""),
        uploadedAt: String(rawStatement?.uploadedAt || ""),
        transactions: statementTransactions,
      };
      return acc;
    }, {});
  }

  if (Object.keys(monthlyStatements).length === 0 && legacyTransactions.length > 0) {
    const grouped = {};
    legacyTransactions.forEach((tx) => {
      const month = toMonthKey(tx.dateObj);
      if (!grouped[month]) grouped[month] = [];
      grouped[month].push(tx);
    });

    monthlyStatements = Object.entries(grouped).reduce((acc, [month, txs]) => {
      acc[month] = {
        month,
        fileName: String(account?.fileName || ""),
        uploadedAt: "",
        transactions: txs,
      };
      return acc;
    }, {});
  }

  const transactions = Object.values(monthlyStatements).flatMap((statement) => statement.transactions || []);
  const manualOpeningBalances =
    account?.manualOpeningBalances && typeof account.manualOpeningBalances === "object"
      ? Object.entries(account.manualOpeningBalances).reduce((acc, [rawMonth, rawValue]) => {
          const month = normalizeMonthKey(rawMonth);
          const amount = toMaybeNumber(rawValue);
          if (month && Number.isFinite(amount)) {
            acc[month] = amount;
          }
          return acc;
        }, {})
      : {};

  const summary = account?.summary
    ? {
        monthStartDate: parseFlexibleDate(account.summary.monthStartDate || ""),
        latestDate: parseFlexibleDate(account.summary.latestDate || ""),
        openingBalance: toMaybeNumber(account.summary.openingBalance),
        monthEndBalance: toMaybeNumber(account.summary.monthEndBalance),
        latestBalance: toMaybeNumber(account.summary.latestBalance),
        inflow: Number(account.summary.inflow) || 0,
        outflow: Number(account.summary.outflow) || 0,
      }
    : null;

  return {
    id: Number(account?.id) || idx + 1,
    legalEntityId: Number(account?.legalEntityId) || 0,
    name: String(account?.name || "").trim(),
    parserProfile: BANK_PARSER_PROFILES.some((item) => item.value === account?.parserProfile)
      ? account.parserProfile
      : "auto",
    statementTemplate: normalizeBankStatementTemplate(account?.statementTemplate),
    status: account?.status === "DELETED" ? "DELETED" : "ACTIVE",
    fileName: String(account?.fileName || ""),
    manualOpeningBalances,
    monthlyStatements,
    transactions,
    summary:
      transactions.length > 0
        ? summarizeBankTransactions(transactions, manualOpeningBalances)
        : summary && summary.latestDate
          ? summary
          : null,
  };
}

function normalizeArticle(row, idx) {
  const aliases = Array.isArray(row.aliases)
    ? row.aliases.map((item) => String(item || "").trim()).filter(Boolean)
    : [];

  return {
    id: Number(row.id) || idx + 1,
    aliases: uniqueValues(aliases),
    articleNoRaw: String(row.articleNoRaw || ""),
    name: String(row.name || ""),
    group: String(row.group || ""),
    activity: String(row.activity || "Не определено"),
    description: String(row.description || ""),
    source: String(row.source || ""),
    comment: String(row.comment || ""),
    status: ["ACTIVE", "INACTIVE", "DELETE", "RENAME"].includes(row.status) ? row.status : "ACTIVE",
  };
}

function buildArticleMap(articles) {
  const map = new Map();

  articles
    .filter((row) => row.status !== "DELETE")
    .forEach((row) => {
      const nameKey = normalizeText(row.name);
      if (nameKey) map.set(nameKey, row);

      (row.aliases || []).forEach((alias) => {
        const aliasKey = normalizeText(alias);
        if (aliasKey) map.set(aliasKey, row);
      });

      const rawNo = normalizeText(row.articleNoRaw);
      const prefix = "поменять на ";
      if (rawNo.startsWith(prefix)) {
        const nextName = row.articleNoRaw.slice(prefix.length).trim();
        if (nextName) {
          map.set(normalizeText(nextName), {
            ...row,
            name: nextName,
            status: "ACTIVE",
          });
        }
      }
    });

  return map;
}

function findArticle(input, articleMap) {
  const normalized = normalizeText(input);
  if (!normalized) return null;

  if (articleMap.has(normalized)) {
    return articleMap.get(normalized);
  }

  for (const [name, row] of articleMap.entries()) {
    if (normalized.includes(name) || name.includes(normalized)) {
      return row;
    }
  }

  return null;
}

function detectCsvDelimiter(text) {
  const sample = String(text || "")
    .split(/\r?\n/)
    .slice(0, 30);

  const delimiters = [";", ",", "\t"];
  const scores = delimiters.reduce((acc, delimiter) => ({ ...acc, [delimiter]: 0 }), {});

  sample.forEach((line) => {
    delimiters.forEach((delimiter) => {
      const count = (line.match(new RegExp(delimiter === "\t" ? "\\t" : `\\${delimiter}`, "g")) || []).length;
      scores[delimiter] += count;
    });
  });

  let best = ";";
  let bestScore = -1;
  delimiters.forEach((delimiter) => {
    if (scores[delimiter] > bestScore) {
      best = delimiter;
      bestScore = scores[delimiter];
    }
  });

  return bestScore > 0 ? best : ";";
}

function delimiterToLabel(delimiter) {
  if (delimiter === "\t") return "TAB";
  if (delimiter === ",") return ",";
  return ";";
}

function detectBankHeaderIndexes(rows, candidates) {
  const result = {
    headerRowIndex: -1,
    idxDate: -1,
    idxAmount: -1,
    idxDebit: -1,
    idxCredit: -1,
    idxSign: -1,
    idxBalance: -1,
    idxAltDate: -1,
  };

  for (let i = 0; i < Math.min(rows.length, 35); i += 1) {
    const row = rows[i] || [];
    if (row.length < 3) continue;

    const headers = row.map((header) => normalizeText(header));
    const dateIdx = findColumnByPriority(headers, candidates.dateCandidates || []);
    const sampleRows = rows.slice(i + 1, Math.min(rows.length, i + 61));
    const amountIdx = findAmountColumn(headers, candidates.amountCandidates || [], sampleRows);
    const debitIdx = findColumnByPriority(headers, candidates.debitCandidates || []);
    const creditIdx = findColumnByPriority(headers, candidates.creditCandidates || []);
    const signIdx = findColumnByPriority(headers, candidates.signCandidates || []);
    const balanceIdx = findColumnByPriority(headers, candidates.balanceCandidates || []);
    const altDateIdx = findColumnByPriority(headers, candidates.altDateCandidates || []);

    const hasSeparatedAmount = amountIdx !== -1 && amountIdx !== dateIdx;
    const hasSeparatedDebitCredit =
      (debitIdx !== -1 && debitIdx !== dateIdx) ||
      (creditIdx !== -1 && creditIdx !== dateIdx) ||
      (signIdx !== -1 && signIdx !== dateIdx);
    const uniqueColumns = new Set([dateIdx, amountIdx, debitIdx, creditIdx, signIdx].filter((idx) => idx >= 0)).size;

    if (dateIdx !== -1 && (hasSeparatedAmount || hasSeparatedDebitCredit) && uniqueColumns >= 2) {
      result.headerRowIndex = i;
      result.idxDate = dateIdx;
      result.idxAmount = amountIdx;
      result.idxDebit = debitIdx;
      result.idxCredit = creditIdx;
      result.idxSign = signIdx;
      result.idxBalance = balanceIdx;
      result.idxAltDate = altDateIdx;
      break;
    }
  }

  return result;
}

function findColumnByPriority(headers, candidates) {
  const normalizedHeaders = (headers || []).map((header) => normalizeText(header));
  const normalizedCandidates = (candidates || [])
    .map((candidate) => normalizeText(candidate))
    .filter(Boolean);

  for (const candidate of normalizedCandidates) {
    const index = normalizedHeaders.findIndex((header) => header.includes(candidate));
    if (index !== -1) return index;
  }

  return -1;
}

function findAmountColumn(headers, candidates, sampleRows = []) {
  if (!Array.isArray(headers) || headers.length === 0) return -1;

  const forbiddenInPrimaryAmount = [
    "umsatzart",
    "buchungstext",
    "verwendungszweck",
    "kategorie",
    "ursprungsbetrag",
    "auslagenersatz",
    "ruecklastschrift",
    "rücklastschrift",
    "fremde gebuhren",
    "fremde gebühren",
  ];

  const isAmountHeader = (header) => {
    const normalized = normalizeText(header);
    if (!normalized) return false;

    if (forbiddenInPrimaryAmount.some((token) => normalized.includes(token))) return false;

    return (candidates || []).some((candidate) => {
      const c = normalizeText(candidate);
      if (!c) return false;

      if (c === "umsatz") {
        return normalized === "umsatz" || normalized.startsWith("umsatz ") || normalized.endsWith(" umsatz");
      }

      return normalized.includes(c);
    });
  };

  const exactBetragIdx = headers.findIndex((header) => {
    const normalized = normalizeText(header);
    return normalized === "betrag" || normalized === "betrag (eur)";
  });
  if (exactBetragIdx !== -1) return exactBetragIdx;

  const candidatesIdx = headers
    .map((header, idx) => ({ idx, ok: isAmountHeader(header), header: normalizeText(header) }))
    .filter((item) => item.ok)
    .map((item) => item.idx);

  if (candidatesIdx.length === 1) return candidatesIdx[0];
  if (candidatesIdx.length > 1) {
    // Choose the column with the highest count of parseable numeric values in nearby rows.
    const scored = candidatesIdx.map((idx) => {
      let parsedCount = 0;
      let nonEmptyCount = 0;

      sampleRows.forEach((row) => {
        const raw = String(row?.[idx] || "").trim();
        if (!raw) return;
        nonEmptyCount += 1;
        const amount = parseAmount(raw);
        if (Number.isFinite(amount)) parsedCount += 1;
      });

      return { idx, parsedCount, nonEmptyCount };
    });

    scored.sort((a, b) => {
      if (b.parsedCount !== a.parsedCount) return b.parsedCount - a.parsedCount;
      return b.nonEmptyCount - a.nonEmptyCount;
    });

    if (scored[0].parsedCount > 0) return scored[0].idx;
    return scored[0].idx;
  }

  // Conservative fallback: most bank exports explicitly use "Betrag".
  const betragIdx = headers.findIndex((header) => normalizeText(header).includes("betrag"));
  return betragIdx;
}

function parseCsvWithBestDelimiter(text, profile, forcedDelimiter = "auto") {
  const preferred = detectCsvDelimiter(text);
  const normalizedForced = templateDelimiterToChar(forcedDelimiter);
  const delimiters = [...new Set([normalizedForced !== "auto" ? normalizedForced : preferred, preferred, ";", "\t", ","])];

  let best = null;

  delimiters.forEach((delimiter) => {
    const rows = parseCsv(text, delimiter);
    if (!rows || rows.length < 2) return;

    const headerInfo = detectBankHeaderIndexes(rows, profile);
    const sample = rows.slice(0, Math.min(rows.length, 60));
    const avgCols = sample.reduce((sum, row) => sum + row.length, 0) / sample.length;
    const maxCols = sample.reduce((max, row) => Math.max(max, row.length), 0);

    let score = avgCols + maxCols * 0.3;
    if (headerInfo.headerRowIndex !== -1) score += 80;
    if (headerInfo.idxDate !== -1) score += 100;
    if (headerInfo.idxAmount !== -1 && headerInfo.idxAmount !== headerInfo.idxDate) score += 45;
    if (
      (headerInfo.idxDebit !== -1 && headerInfo.idxDebit !== headerInfo.idxDate) ||
      (headerInfo.idxCredit !== -1 && headerInfo.idxCredit !== headerInfo.idxDate)
    ) {
      score += 30;
    }
    if (headerInfo.idxSign !== -1 && headerInfo.idxSign !== headerInfo.idxDate) score += 14;
    if (avgCols <= 1.2) score -= 100;
    if (headerInfo.headerRowIndex === -1) score -= 120;
    if (maxCols < 3) score -= 120;
    if (delimiter === ",") score -= 8; // German bank exports almost always ";" or TAB
    if (normalizedForced !== "auto" && delimiter === normalizedForced) {
      score += 20;
    }

    if (!best || score > best.score) {
      best = {
        score,
        delimiter,
        delimiterLabel: delimiterToLabel(delimiter),
        rows,
        headerInfo,
      };
    }
  });

  if (best) return best;

  const fallbackDelimiter = normalizedForced !== "auto" ? normalizedForced : preferred || ";";
  const fallbackRows = parseCsv(text, fallbackDelimiter);
  return {
    score: 0,
    delimiter: fallbackDelimiter,
    delimiterLabel: delimiterToLabel(fallbackDelimiter),
    rows: fallbackRows,
    headerInfo: detectBankHeaderIndexes(fallbackRows, profile),
  };
}

function getMonthHintFromSelectedMonth(selectedMonth) {
  const raw = String(selectedMonth || "").trim();
  if (!/^\d{4}-\d{2}$/.test(raw)) return null;
  const year = Number(raw.slice(0, 4));
  const month = Number(raw.slice(5, 7));
  if (!Number.isFinite(year) || !Number.isFinite(month) || month < 1 || month > 12) return null;
  return { year, month };
}

function parseCsv(text, delimiter) {
  const rows = [];
  let currentCell = "";
  let currentRow = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        currentCell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && char === delimiter) {
      currentRow.push(currentCell.trim());
      currentCell = "";
      continue;
    }

    if (!inQuotes && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") i += 1;
      currentRow.push(currentCell.trim());
      currentCell = "";
      rows.push(currentRow);
      currentRow = [];
      continue;
    }

    currentCell += char;
  }

  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    rows.push(currentRow);
  }

  return rows.filter((row) => row.some((cell) => cell !== ""));
}

function findColumn(headers, candidates) {
  return headers.findIndex((header) => candidates.some((candidate) => header.includes(candidate)));
}

function parseAmount(raw) {
  const source = String(raw || "").replace(/\u2212/g, "-").trim();
  if (!source) return null;

  const digitsOnlyRaw = source.replace(/\D/g, "");
  const hasSeparators = /[,.]/.test(source);
  if (digitsOnlyRaw.length > 18) return null;
  if (!hasSeparators && digitsOnlyRaw.length > 12) return null;

  const isBracketNegative = /^\(.*\)$/.test(source);
  let cleaned = source.replace(/\s/g, "").replace(/[^\d,.-]/g, "");
  if (!cleaned) return null;

  // Supports trailing minus: "1.234,56-"
  const isTrailingMinus = cleaned.endsWith("-");
  if (isTrailingMinus) {
    cleaned = `-${cleaned.slice(0, -1)}`;
  }

  if (cleaned.includes(",") && cleaned.includes(".")) {
    if (cleaned.lastIndexOf(",") > cleaned.lastIndexOf(".")) {
      cleaned = cleaned.replace(/\./g, "").replace(",", ".");
    } else {
      cleaned = cleaned.replace(/,/g, "");
    }
  } else if (cleaned.includes(".") && !cleaned.includes(",")) {
    const sign = cleaned.startsWith("-") ? "-" : "";
    const unsigned = sign ? cleaned.slice(1) : cleaned;

    // German thousands format without decimals: 10.000 or 1.234.567
    if (/^\d{1,3}(\.\d{3})+$/.test(unsigned)) {
      cleaned = `${sign}${unsigned.replace(/\./g, "")}`;
    }
  } else if (cleaned.includes(",")) {
    cleaned = cleaned.replace(",", ".");
  }

  const value = Number(cleaned);
  if (!Number.isFinite(value)) return null;
  return isBracketNegative ? -Math.abs(value) : value;
}

function resolveSignHintFromDebitCreditCells(debitRaw, creditRaw) {
  const debitNormalized = normalizeText(debitRaw);
  const creditNormalized = normalizeText(creditRaw);

  const debitNumeric = parseAmount(debitRaw);
  const creditNumeric = parseAmount(creditRaw);

  if (Number.isFinite(debitNumeric) && Math.abs(debitNumeric) > 0.000001) return -1;
  if (Number.isFinite(creditNumeric) && Math.abs(creditNumeric) > 0.000001) return 1;

  if (debitNormalized && !creditNormalized) return -1;
  if (creditNormalized && !debitNormalized) return 1;

  if (isDebitMarker(debitNormalized)) return -1;
  if (isCreditMarker(debitNormalized)) return 1;
  if (isCreditMarker(creditNormalized)) return 1;
  if (isDebitMarker(creditNormalized)) return -1;

  return 0;
}

function resolveSignHintFromSignCell(signRaw) {
  const normalized = normalizeText(signRaw);
  if (!normalized) return 0;
  if (isDebitMarker(normalized)) return -1;
  if (isCreditMarker(normalized)) return 1;
  return 0;
}

function resolveSignHintFromAmountCell(amountRaw) {
  const raw = String(amountRaw || "").trim();
  if (!raw) return 0;
  if (raw.startsWith("-") || raw.endsWith("-") || /^\(.*\)$/.test(raw)) return -1;

  const normalized = normalizeText(raw);
  if (isDebitMarker(normalized)) return -1;
  if (isCreditMarker(normalized)) return 1;

  const upper = raw.toUpperCase();
  if (/\bS\b/.test(upper) || /\bDR\b/.test(upper) || /\bDB\b/.test(upper)) return -1;
  if (/\bH\b/.test(upper) || /\bCR\b/.test(upper)) return 1;
  return 0;
}

function resolveSignHintFromRowText(cells) {
  const rowText = normalizeText((cells || []).join(" "));
  if (!rowText) return 0;

  const hasDebit = isDebitMarker(rowText);
  const hasCredit = isCreditMarker(rowText);
  if (hasDebit && !hasCredit) return -1;
  if (hasCredit && !hasDebit) return 1;
  return 0;
}

function resolveSignedAmountFromDebitCreditCells(debitRaw, creditRaw) {
  const debitNumeric = parseAmount(debitRaw);
  const creditNumeric = parseAmount(creditRaw);

  if (Number.isFinite(debitNumeric) || Number.isFinite(creditNumeric)) {
    return (creditNumeric || 0) - Math.abs(debitNumeric || 0);
  }

  return null;
}

function isDebitMarker(value) {
  if (!value) return false;
  return (
    value === "s" ||
    value === "d" ||
    value === "-" ||
    value.includes("soll") ||
    value.includes("debit") ||
    value.includes("lastschrift") ||
    value.includes("belastung") ||
    value.includes("abbuchung") ||
    value.includes("ausgang") ||
    value.includes("abgang") ||
    value.includes("zahlung")
  );
}

function isCreditMarker(value) {
  if (!value) return false;
  return (
    value === "h" ||
    value === "c" ||
    value === "+" ||
    value.includes("haben") ||
    value.includes("credit") ||
    value.includes("gutschrift") ||
    value.includes("eingang") ||
    value.includes("einzahlung") ||
    value.includes("erstattung")
  );
}

function parseFlexibleDate(raw) {
  if (!raw) return null;
  if (raw instanceof Date) {
    return Number.isNaN(raw.getTime()) ? null : raw;
  }

  const clean = String(raw).trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(clean)) {
    const date = new Date(`${clean}T00:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  if (/^\d{4}-\d{2}-\d{2}T/.test(clean)) {
    const fullDate = new Date(clean);
    if (!Number.isNaN(fullDate.getTime())) {
      return new Date(fullDate.getFullYear(), fullDate.getMonth(), fullDate.getDate());
    }
  }

  const parts = clean.split(/[./-]/).map((item) => item.trim());
  if (parts.length !== 3) return null;

  let day;
  let month;
  let year;

  if (parts[0].length === 4) {
    year = Number(parts[0]);
    month = Number(parts[1]);
    day = Number(parts[2]);
  } else {
    day = Number(parts[0]);
    month = Number(parts[1]);
    year = Number(parts[2]);
  }

  if (year < 100) {
    year += 2000;
  }

  const date = new Date(year, month - 1, day);
  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function parseFlexibleDateWithYearHint(raw, monthHint) {
  const parsed = parseFlexibleDate(raw);
  if (parsed) return parsed;

  const clean = String(raw || "").trim();
  if (!clean) return null;

  const embeddedFullDate = clean.match(/(\d{4}-\d{2}-\d{2}|\d{1,2}[./-]\d{1,2}[./-]\d{2,4})/);
  if (embeddedFullDate) {
    const fromEmbedded = parseFlexibleDate(embeddedFullDate[1]);
    if (fromEmbedded) return fromEmbedded;
  }

  if (!monthHint || !Number.isFinite(monthHint.year) || !Number.isFinite(monthHint.month)) return null;
  const shortDate = clean.match(/^(\d{1,2})[./-](\d{1,2})[./-]?$/);
  if (!shortDate) {
    const embeddedShortDate = clean.match(/(\d{1,2}[./-]\d{1,2})(?![./-]\d)/);
    if (!embeddedShortDate) return null;
    return parseFlexibleDateWithYearHint(embeddedShortDate[1], monthHint);
  }

  const day = Number(shortDate[1]);
  const month = Number(shortDate[2]);
  let year = Number(monthHint.year);
  if (monthHint.month === 1 && month === 12) {
    year -= 1;
  } else if (monthHint.month === 12 && month === 1) {
    year += 1;
  }
  const date = new Date(year, month - 1, day);

  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function findDateInCells(cells, monthHint = null) {
  for (const cell of cells) {
    const value = String(cell || "").trim();
    if (!value) continue;

    const date = parseFlexibleDateWithYearHint(value, monthHint);
    if (date) return date;
  }

  return null;
}

function extractAmountFromCells(cells) {
  let candidate = null;

  for (const cell of cells) {
    const raw = String(cell || "").trim();
    if (!raw) continue;
    if (!/[.,€]/.test(raw)) continue;

    const amount = parseAmount(raw);
    if (amount === null || !Number.isFinite(amount)) continue;
    if (Math.abs(amount) > 1000000000) continue;

    // Keep the amount with highest absolute value, usually this is the balance.
    if (candidate === null || Math.abs(amount) > Math.abs(candidate)) {
      candidate = amount;
    }
  }

  return candidate;
}

function resolveOperationType(typeRaw, amountValue) {
  const normalized = normalizeText(typeRaw);

  if (normalized.includes("поступ")) return "Поступление";
  if (normalized.includes("выбыт") || normalized.includes("расход")) return "Выбытие";

  return amountValue < 0 ? "Выбытие" : "Поступление";
}

function uniqueValues(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "ru"));
}

function toMonthKey(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function normalizeMonthKey(value) {
  const raw = String(value || "").trim();
  if (/^\d{4}-\d{2}$/.test(raw)) return raw;

  const parsed = parseFlexibleDate(raw);
  return parsed ? toMonthKey(parsed) : "";
}

function getCurrentMonthKey() {
  return toMonthKey(new Date());
}

function getLoadedStatementMonths(account) {
  return Object.keys(account?.monthlyStatements || {}).sort((a, b) => b.localeCompare(a));
}

function getDefaultManualOpeningMonth(account) {
  const loaded = getLoadedStatementMonths(account);
  if (loaded.length > 0) {
    const earliest = [...loaded].sort((a, b) => a.localeCompare(b))[0];
    const year = String(earliest).slice(0, 4);
    return /^\d{4}$/.test(year) ? `${year}-01` : earliest;
  }

  const currentYear = String(new Date().getFullYear());
  return `${currentYear}-01`;
}

function getManualOpeningBalance(account, monthKey) {
  const normalizedMonth = normalizeMonthKey(monthKey);
  if (!normalizedMonth) return null;
  return toMaybeNumber(account?.manualOpeningBalances?.[normalizedMonth]);
}

function toDateInputValue(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function startOfDay(date) {
  const value = date instanceof Date ? date : parseFlexibleDate(date);
  if (!(value instanceof Date) || Number.isNaN(value.getTime())) return new Date(NaN);
  return new Date(value.getFullYear(), value.getMonth(), value.getDate());
}

function endOfDay(date) {
  const value = startOfDay(date);
  if (Number.isNaN(value.getTime())) return value;
  value.setHours(23, 59, 59, 999);
  return value;
}

function addDays(date, days) {
  const value = startOfDay(date);
  if (Number.isNaN(value.getTime())) return value;
  value.setDate(value.getDate() + Number(days || 0));
  return value;
}

function addMonths(date, months) {
  const value = startOfDay(date);
  if (Number.isNaN(value.getTime())) return value;
  const day = value.getDate();
  const target = new Date(value.getFullYear(), value.getMonth() + Number(months || 0), 1);
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  target.setDate(Math.min(day, lastDay));
  return target;
}

function formatMoney(value) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value || 0);
}

function formatMaybeMoney(value) {
  return Number.isFinite(value) ? formatMoney(value) : "н/д";
}

function formatDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "н/д";
  return toDateInputValue(date);
}

function formatDateTime(value) {
  let date = null;
  if (typeof value === "string" && value.includes("T")) {
    const iso = new Date(value);
    if (!Number.isNaN(iso.getTime())) {
      date = iso;
    }
  }
  if (!date) {
    date = parseFlexibleDate(value);
  }
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "н/д";
  return new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function formatNumberForCsv(value) {
  return Number(value || 0).toFixed(2).replace(".", ",");
}

function formatNumberForInput(value) {
  if (!Number.isFinite(value)) return "";
  return String(value.toFixed(2)).replace(".", ",");
}

function formatPercent(value) {
  if (!Number.isFinite(value)) return "н/д";
  return `${value.toFixed(1).replace(".", ",")}%`;
}

function toMaybeNumber(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === "string" && value.trim() === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function normalizeUserName(value) {
  const name = String(value || "")
    .replace(/\s+/g, " ")
    .trim();
  return name || "Не указан";
}

function normalizeUsersList(users, fallbackUser) {
  const seen = new Set();
  const normalized = [];

  const addUser = (value) => {
    const safeName = normalizeUserName(value);
    const key = normalizeText(safeName);
    if (!key || seen.has(key)) return;
    seen.add(key);
    normalized.push(safeName);
  };

  if (Array.isArray(users)) {
    users.forEach(addUser);
  }
  addUser(fallbackUser);

  if (normalized.length === 0) {
    normalized.push("Не указан");
  }
  return normalized;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replaceAll("ё", "е")
    .replace(/\s+/g, " ")
    .trim();
}

function statusLabel(status) {
  if (status === "DELETE") return "Удалено";
  if (status === "RENAME") return "Переименовать";
  if (status === "INACTIVE") return "Неактуально";
  return "Активно";
}

function isTechnicalActivity(activity) {
  return normalizeText(activity) === "техническая операция";
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
