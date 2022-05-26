function createSubSidebar(option, fileNameList) {
  let title, titleAlias, icon, initialOpenGroupIndex;
  if (typeof option === "string") {
    title = titleAlias = icon = option;
    initialOpenGroupIndex = -1;
  } else {
    title = option.title;
    (titleAlias = option.titleAlias), (icon = option.icon);
    initialOpenGroupIndex = option.initialOpenGroupIndex || -1;
  }

  return {
    title: titleAlias,
    icon,
    initialOpenGroupIndex,
    children: fileNameList.map((item) => {
      return "/article/" + title + "/" + item;
    }),
  };
}

const articleSidebar = {
  path: "/article/",
  list: [
    "",
    createSubSidebar("js", [
      "01-types",
      "02-array-basic",
      "03-prototype",
      "04-context",
      "05-closet",
      "06-memory",
      "07-create-object",
      "08-js-module",
      "09-event",
      "10-map-object",
      "11-accuracy-issues",
      "12-implicit-conversion",
      "13-intervel-raf",
      "14-event-proxy",
      "15-object",
      "16-stick-mode",
      "17-evel",
      "18-call-apply-bind",
      "19-let-const-var",
      "20-deconstruct",
      "21-arrow-func",
      "22-promise",
      "23-symbol",
      "24-iterator",
      "25-generator",
      "26-async",
      "27-deep-clone",
      "28-for-in-for-of",
      "29-map-set",
      "30-debounce-throttle",
      "31-error-types",
    ]),
    createSubSidebar("css", [
      "01-center-methods",
      "02-location-flow",
      "03-word-break",
      "04-css-basic",
      "05-horizen-scroll",
      "06-weird-margin",
      "07-css-function",
      "08-about-pixel",
      "09-1px-problem",
      "10-clip-path",
      "11-flex",
      "12-grid",
    ]),
    createSubSidebar("browser", [
      "01-browser-kernel",
      "02-browser-cache",
      "03-chrome-animation",
      "04-notifications-api",
      "05-localStorage",
    ]),
    createSubSidebar("network", [
      "01-tcp-udp",
      "02-ip-dns",
      "03-http-https",
      "04-encryption",
      "05-http-header",
      "06-ssl-tls",
      "07-VPN-VPS-SSR-SS",
    ]),
    createSubSidebar("vue", [
      "01-vue-life-circle",
      "02-keep-alive",
      "03-navigation-guards",
      "04-route-cache",
      "05-vuex",
      "06-vue-router",
      "07-mvvm",
      "08-vue-key",
      "09-vue2-basic",
      "10-vue-cli",
    ]),
    createSubSidebar("node", ["01-node-crash-problem", "02-process-env"]),
    createSubSidebar("mongodb", [
      "01-start",
      "02-mongoShell",
      "03-crud",
      "04-aggregate",
    ]),
    createSubSidebar(
      {
        titleAlias: "算法基础",
        title: "arithmetic",
        icon: "Arithmetic",
      },
      ["01-basic", "02-sort", "03-traverse"]
    ),
    createSubSidebar(
      {
        titleAlias: "其他",
        title: "other",
        icon: "other",
      },
      [
        "01-linux-basic",
        "02-git-basic",
        "03-eslint-comment",
        "04-auto-workflow",
        "05-202112",
      ]
    ),
  ],
};

module.exports = articleSidebar;