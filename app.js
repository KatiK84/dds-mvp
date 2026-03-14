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

const STORAGE_ARTICLES_KEY = "dds_mvp_articles_v2";
const STORAGE_BANKS_KEY = "dds_mvp_banks_v1";
const UNKNOWN_ARTICLE = "Статья неизвестна";
const UNKNOWN_ACTIVITY = "03 Финансовая деятельность";

const state = {
  activeTab: "report",
  articles: loadArticles(),
  banks: loadBanksState(),
  operationsRaw: [],
  manualAssignments: {},
  filteredOperations: [],
  reportRows: [],
  monthRows: [],
};

const els = {
  tabs: document.querySelectorAll(".tab-btn"),
  reportTab: document.getElementById("reportTab"),
  banksTab: document.getElementById("banksTab"),
  reconcileTab: document.getElementById("reconcileTab"),
  articlesTab: document.getElementById("articlesTab"),
  legalEntityForm: document.getElementById("legalEntityForm"),
  legalEntityNameInput: document.getElementById("legalEntityNameInput"),
  bankAccountForm: document.getElementById("bankAccountForm"),
  bankAccountNameInput: document.getElementById("bankAccountNameInput"),
  bankAccountEntitySelect: document.getElementById("bankAccountEntitySelect"),
  banksEntitySummaryBody: document.getElementById("banksEntitySummaryBody"),
  banksEntityBlocks: document.getElementById("banksEntityBlocks"),
  banksGlobalSummaryBody: document.getElementById("banksGlobalSummaryBody"),
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
  reportTableBody: document.getElementById("reportTableBody"),
  monthTableBody: document.getElementById("monthTableBody"),
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
  bindReportEvents();
  bindBankEvents();
  bindReconcileEvents();
  bindArticleEvents();
  refreshBankEntitySelect();
  refreshArticleFilterOptions();
  refreshReportActivityOptions();
  renderBanksTab();
  renderArticlesTable();
  renderReport();
  renderReconcileTable();
}

function bindTabs() {
  els.tabs.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => setActiveTab(tabBtn.dataset.tab));
  });
}

function setActiveTab(tabName) {
  state.activeTab = tabName;

  els.tabs.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  els.reportTab.classList.toggle("active", tabName === "report");
  els.banksTab.classList.toggle("active", tabName === "banks");
  els.reconcileTab.classList.toggle("active", tabName === "reconcile");
  els.articlesTab.classList.toggle("active", tabName === "articles");
}

function bindReportEvents() {
  els.operationsFile.addEventListener("change", onFileUploaded);
  els.loadSampleBtn.addEventListener("click", () => loadOperationsFromText(SAMPLE_OPERATIONS, "пример"));
  els.downloadTemplateBtn.addEventListener("click", downloadTemplateCsv);
  els.dateFromInput.addEventListener("change", renderReport);
  els.dateToInput.addEventListener("change", renderReport);
  els.activityFilter.addEventListener("change", renderReport);
  els.resetFiltersBtn.addEventListener("click", resetReportFilters);
  els.downloadReportCsvBtn.addEventListener("click", downloadReportCsv);
}

function bindBankEvents() {
  els.legalEntityForm.addEventListener("submit", onAddLegalEntity);
  els.bankAccountForm.addEventListener("submit", onAddBankAccount);

  els.banksEntityBlocks.addEventListener("change", (event) => {
    const input = event.target.closest("input[data-bank-upload='1']");
    if (!input) return;

    const accountId = Number(input.dataset.accountId);
    const [file] = input.files || [];
    if (!file) return;

    uploadBankStatement(accountId, file);
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

    if (action === "restore") {
      restoreBankAccount(accountId);
    }
  });
}

function onAddLegalEntity(event) {
  event.preventDefault();

  const name = String(els.legalEntityNameInput.value || "").trim();
  if (!name) {
    alert("Введите название юрлица.");
    return;
  }

  state.banks.legalEntities.push({
    id: getNextId(state.banks.legalEntities),
    name,
  });

  els.legalEntityNameInput.value = "";
  persistBanksAndRender();
}

function onAddBankAccount(event) {
  event.preventDefault();

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
    status: "ACTIVE",
    fileName: "",
    transactions: [],
    summary: null,
  });

  els.bankAccountNameInput.value = "";
  persistBanksAndRender();
}

function uploadBankStatement(accountId, file) {
  const reader = new FileReader();

  reader.onload = () => {
    try {
      const transactions = parseBankStatementCsv(String(reader.result || ""));
      const summary = summarizeBankTransactions(transactions);

      state.banks.accounts = state.banks.accounts.map((account) =>
        account.id === accountId
          ? {
              ...account,
              fileName: file.name,
              transactions,
              summary,
            }
          : account
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

function deleteBankAccountSafely(accountId) {
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

  persistBanksAndRender();
}

function restoreBankAccount(accountId) {
  const account = state.banks.accounts.find((item) => item.id === accountId);
  if (!account || account.status !== "DELETED") return;

  const confirmed = window.confirm(`Восстановить банк "${account.name}" в активные?`);
  if (!confirmed) return;

  state.banks.accounts = state.banks.accounts.map((item) =>
    item.id === accountId ? { ...item, status: "ACTIVE" } : item
  );

  persistBanksAndRender();
}

function parseBankStatementCsv(text) {
  const cleanText = text.replace(/^\uFEFF/, "").trim();
  if (!cleanText) throw new Error("CSV выписки пустой.");

  const firstLine = cleanText.split("\n")[0] || "";
  const delimiter = (firstLine.match(/;/g) || []).length >= (firstLine.match(/,/g) || []).length ? ";" : ",";
  const rows = parseCsv(cleanText, delimiter);

  if (rows.length < 2) throw new Error("В выписке нет данных.");

  const dateCandidates = [
    "дата",
    "date",
    "booking",
    "buchungstag",
    "buchungsdatum",
    "wertstellung",
    "valuta",
  ];
  const altDateCandidates = ["wert", "wertstellung", "valuta"];
  const amountCandidates = ["сумма", "amount", "betrag", "umsatz", "betrag (eur)"];
  const debitCandidates = ["списан", "debit", "расход", "выбыт", "soll", "lastschrift"];
  const creditCandidates = ["зачисл", "credit", "приход", "поступ", "haben", "gutschrift"];
  const balanceCandidates = ["баланс", "остаток", "balance", "saldo", "kontostand"];

  let headerRowIndex = -1;
  let idxDate = -1;
  let idxAmount = -1;
  let idxDebit = -1;
  let idxCredit = -1;
  let idxBalance = -1;
  let idxAltDate = -1;

  for (let i = 0; i < Math.min(rows.length, 25); i += 1) {
    const headers = rows[i].map((header) => normalizeText(header));
    const dateIdx = findColumn(headers, dateCandidates);
    const amountIdx = findColumn(headers, amountCandidates);
    const debitIdx = findColumn(headers, debitCandidates);
    const creditIdx = findColumn(headers, creditCandidates);
    const balanceIdx = findColumn(headers, balanceCandidates);
    const altDateIdx = findColumn(headers, altDateCandidates);

    if (dateIdx !== -1 && (amountIdx !== -1 || debitIdx !== -1 || creditIdx !== -1)) {
      headerRowIndex = i;
      idxDate = dateIdx;
      idxAmount = amountIdx;
      idxDebit = debitIdx;
      idxCredit = creditIdx;
      idxBalance = balanceIdx;
      idxAltDate = altDateIdx;
      break;
    }
  }

  if (headerRowIndex === -1 || idxDate === -1) {
    throw new Error("Не найдена колонка даты (например: Buchungstag/Wertstellung/Дата).");
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

      let dateObj = parseFlexibleDate(primaryDateRaw);
      if (!dateObj && altDateRaw) {
        dateObj = parseFlexibleDate(altDateRaw);
      }
      if (!dateObj) {
        dateObj = findDateInCells(cells);
      }
      if (!dateObj) return null;

      let amount = null;
      if (idxAmount >= 0) {
        amount = parseAmount(String(cells[idxAmount] || ""));
      }

      if (amount === null && (idxDebit >= 0 || idxCredit >= 0)) {
        const debit = parseAmount(String(cells[idxDebit] || "")) || 0;
        const credit = parseAmount(String(cells[idxCredit] || "")) || 0;
        amount = credit - Math.abs(debit);
      }

      if (amount === null || !Number.isFinite(amount)) {
        amount = isBalanceSnapshot ? 0 : null;
      }

      if (amount === null || !Number.isFinite(amount)) {
        return null;
      }

      let balance = idxBalance >= 0 ? parseAmount(String(cells[idxBalance] || "")) : null;
      if ((balance === null || !Number.isFinite(balance)) && isBalanceSnapshot) {
        balance = extractAmountFromCells(cells);
      }

      return {
        idx: index + headerRowIndex + 1,
        dateObj,
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
    throw new Error("Не удалось прочитать строки выписки: проверьте формат CSV и названия колонок.");
  }

  return parsedRows;
}

function summarizeBankTransactions(transactions) {
  if (!transactions || transactions.length === 0) {
    return null;
  }

  const sorted = [...transactions].sort((a, b) => {
    const byDate = a.dateObj.getTime() - b.dateObj.getTime();
    return byDate !== 0 ? byDate : (a.idx || 0) - (b.idx || 0);
  });

  const latest = sorted[sorted.length - 1];
  const monthStart = new Date(latest.dateObj.getFullYear(), latest.dateObj.getMonth(), 1);

  const inMonth = sorted.filter((tx) => tx.dateObj >= monthStart);
  const latestInMonthWithBalance = [...inMonth].reverse().find((tx) => tx.balance !== null) || null;
  const latestOverallWithBalance = [...sorted].reverse().find((tx) => tx.balance !== null) || null;
  const beforeMonthWithBalance = [...sorted]
    .filter((tx) => tx.dateObj < monthStart && tx.balance !== null)
    .at(-1);
  const firstMonthWithBalance = inMonth.find((tx) => tx.balance !== null) || null;
  const monthHasMovement = inMonth.some((tx) => Math.abs(tx.amount) > 0.000001);

  let openingBalance = beforeMonthWithBalance ? beforeMonthWithBalance.balance : null;
  if (openingBalance === null && firstMonthWithBalance && !monthHasMovement) {
    openingBalance = firstMonthWithBalance.balance;
  }

  const monthEndBalance = latestInMonthWithBalance ? latestInMonthWithBalance.balance : null;
  const latestBalance = latestOverallWithBalance ? latestOverallWithBalance.balance : null;

  const inflow = inMonth.filter((tx) => tx.amount > 0).reduce((sum, tx) => sum + tx.amount, 0);
  const outflow = inMonth
    .filter((tx) => tx.amount < 0)
    .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

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

  renderBanksEntityBlocks(entitySummaries);
  renderBanksEntitySummaryTable(entitySummaries);
  renderBanksGlobalSummary(entitySummaries);
}

function renderBanksEntityBlocks(entitySummaries) {
  els.banksEntityBlocks.innerHTML = entitySummaries
    .map(({ entity, accounts, summary }) => {
      const accountsHtml =
        accounts.length === 0
          ? `<div class="empty">Пока нет добавленных счетов.</div>`
          : accounts
              .map((account) => {
                const isDeleted = account.status === "DELETED";
                const status = account.summary
                  ? `Файл: ${escapeHtml(account.fileName)}. Последняя дата: ${formatDate(account.summary.latestDate)}`
                  : "Выписка не загружена.";

                return `
                <article class="bank-account-card">
                  <div class="bank-account-head">
                    <div class="bank-account-name">${escapeHtml(account.name)}</div>
                    <div class="bank-account-meta">
                      <span class="badge ${isDeleted ? "DELETE" : "ACTIVE"}">${isDeleted ? "Удален" : "Активен"}</span>
                      <div class="bank-account-actions">
                        ${
                          isDeleted
                            ? `<button type="button" class="secondary" data-bank-action="restore" data-account-id="${account.id}">Восстановить</button>`
                            : `<button type="button" class="secondary" data-bank-action="delete" data-account-id="${account.id}">Удалить</button>`
                        }
                      </div>
                    </div>
                  </div>
                  <div class="bank-upload">
                    <input type="file" accept=".csv,text/csv" data-bank-upload="1" data-account-id="${account.id}" ${isDeleted ? "disabled" : ""} />
                    <span class="bank-status">${status}</span>
                  </div>
                  ${renderBankAccountSummary(account.summary, account.transactions)}
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

function renderBankAccountSummary(summary, transactions) {
  if (!summary) {
    return `<div class="bank-account-summary empty">Нет данных по банку.</div>`;
  }

  const monthlyRows = summarizeBankTransactionsByMonth(transactions || []);
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

function summarizeBankTransactionsByMonth(transactions) {
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

  return [...grouped.values()]
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
    .sort((a, b) => b.month.localeCompare(a.month));
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
}

function refreshBankEntitySelect() {
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
  els.addArticleBtn.addEventListener("click", () => openArticleForm());
  els.downloadArticlesCsv.addEventListener("click", downloadArticlesCsv);
  els.cancelArticleEdit.addEventListener("click", closeArticleForm);
  els.articleForm.addEventListener("submit", onArticleFormSubmit);

  els.articlesTableBody.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const action = button.dataset.action;
    const id = Number(button.dataset.id);

    if (action === "edit") {
      const article = state.articles.find((item) => item.id === id);
      if (article) openArticleForm(article);
      return;
    }

    if (action === "rename") {
      renameArticle(id);
      return;
    }

    if (action === "delete") {
      markArticleDeleted(id);
      return;
    }

    if (action === "restore") {
      restoreArticle(id);
    }
  });
}

function onFileUploaded(event) {
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
  renderReportTable(reportRows, totalsByActivity, grandTotals);
  renderMonthTable(monthRows);
  renderReconcileTable();
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

  const operations = getOperationsForReconcile();
  const showOnlyUnresolved = Boolean(els.unresolvedOnly.checked);
  const rows = showOnlyUnresolved ? operations.filter((op) => op.unresolved) : operations;

  const unresolvedTotal = operations.filter((op) => op.unresolved).length;
  els.reconcileStatus.textContent = `Операций: ${operations.length}. Неразнесенных: ${unresolvedTotal}.`;

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
          <select data-row-id="${op.rowId}">
            <option value="" ${selectedOptionValue === "" ? "selected" : ""}>Не выбрано</option>
            ${articleOptions
              .map(
                (name) =>
                  `<option value="${escapeHtml(name)}" ${name === selectedOptionValue ? "selected" : ""}>${escapeHtml(name)}</option>`
              )
              .join("")}
          </select>
        </td>
        <td><button type="button" class="secondary" data-action="assign" data-id="${op.rowId}">Применить</button></td>
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
  const selectEl = els.reconcileTableBody.querySelector(`select[data-row-id="${rowId}"]`);
  if (!selectEl) return;

  const selectedArticle = selectEl.value.trim();
  if (selectedArticle) {
    state.manualAssignments[rowId] = selectedArticle;
  } else {
    delete state.manualAssignments[rowId];
  }

  renderReport();
}

function downloadUnresolvedCsv() {
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
            <button class="secondary" type="button" data-action="edit" data-id="${row.id}">Редакт.</button>
            <button class="secondary" type="button" data-action="rename" data-id="${row.id}">Переим.</button>
            ${
              row.status === "DELETE"
                ? `<button class="secondary" type="button" data-action="restore" data-id="${row.id}">Восстановить</button>`
                : `<button class="secondary" type="button" data-action="delete" data-id="${row.id}">Удалить</button>`
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

  if (id) {
    state.articles = state.articles.map((row) => (row.id === id ? { ...row, ...payload } : row));
  } else {
    state.articles.push({
      id: getNextArticleId(),
      aliases: [],
      ...payload,
    });
  }

  persistAndRerenderAfterArticleChange();
  closeArticleForm();
}

function renameArticle(id) {
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

  persistAndRerenderAfterArticleChange();
}

function markArticleDeleted(id) {
  const article = state.articles.find((item) => item.id === id);
  if (!article) return;

  const confirmed = window.confirm(`Пометить статью "${article.name}" как удаленную?`);
  if (!confirmed) return;

  state.articles = state.articles.map((item) =>
    item.id === id ? { ...item, status: "DELETE" } : item
  );

  persistAndRerenderAfterArticleChange();
}

function restoreArticle(id) {
  state.articles = state.articles.map((item) => (item.id === id ? { ...item, status: "ACTIVE" } : item));
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

function downloadArticlesCsv() {
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

function normalizeBankAccount(account, idx) {
  const transactions = Array.isArray(account?.transactions)
    ? account.transactions
        .map((tx, txIdx) => ({
          idx: Number(tx?.idx) || txIdx,
          dateObj: parseFlexibleDate(tx?.dateObj || tx?.dateRaw || ""),
          amount: Number(tx?.amount),
          balance: Number.isFinite(Number(tx?.balance)) ? Number(tx.balance) : null,
        }))
        .filter((tx) => tx.dateObj && Number.isFinite(tx.amount))
    : [];

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
    status: account?.status === "DELETED" ? "DELETED" : "ACTIVE",
    fileName: String(account?.fileName || ""),
    transactions,
    summary: summary && summary.latestDate ? summary : transactions.length > 0 ? summarizeBankTransactions(transactions) : null,
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
  let cleaned = String(raw || "").trim().replace(/\s/g, "").replace(/[^\d,.-]/g, "");
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
  } else if (cleaned.includes(",")) {
    cleaned = cleaned.replace(",", ".");
  }

  const value = Number(cleaned);
  return Number.isFinite(value) ? value : null;
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

  const isoWithTime = clean.match(/^(\d{4}-\d{2}-\d{2})T/);
  if (isoWithTime) {
    const date = new Date(`${isoWithTime[1]}T00:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
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

function findDateInCells(cells) {
  for (const cell of cells) {
    const value = String(cell || "").trim();
    if (!value) continue;

    const date = parseFlexibleDate(value);
    if (date) return date;
  }

  return null;
}

function extractAmountFromCells(cells) {
  let candidate = null;

  for (const cell of cells) {
    const raw = String(cell || "").trim();
    if (!raw) continue;

    const amount = parseAmount(raw);
    if (amount === null || !Number.isFinite(amount)) continue;

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

function toDateInputValue(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
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

function formatNumberForCsv(value) {
  return Number(value || 0).toFixed(2).replace(".", ",");
}

function toMaybeNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
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
