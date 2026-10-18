# 📘 Playwright Learning Roadmap

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=180&color=gradient&text=Playwright&fontSize=50&fontAlignY=35&desc=Test%20Automation%20Framework&descAlignY=60&descSize=18" width="100%" />

<br>

![Playwright](https://img.shields.io/badge/Playwright-latest-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white)

</div>

---

# 🎯 About This Repository

This repository contains my **Playwright learning journey**, covering concepts from the fundamentals to advanced Playwright and practical test automation.

The goal is not just to learn Playwright syntax, but to understand how Playwright can be used to build:

- 🧪 Test automation frameworks
- 🌐 Web automation
- 🔌 API automation
- 🛠️ Reusable utilities
- 📦 Scalable automation architecture
- 🚀 CI/CD-ready test frameworks

---

<details>
  <summary>
    
# 🗺️ Playwright Learning Roadmap

</summary>

```mermaid

flowchart LR

A[Playwright] --> B[Locators]
A --> J[Navigations]
A --> C[locator]
A --> D[Frame handling]
A --> E[Radio Buttons Handling]
A --> F[TextBox Handling ]
A --> H[Mouse Actions]
A --> I[KeyBoard Actions]
C --> K[Checkbox Handling]
A --> L[Assertions]
A --> M[Fixtures]
A --> N[Hooks]
A --> O[Page Object Model]
A --> P[Multiple windows/Tabs]
A --> Q[Alerts/Dialogs]
A --> R[File upload & Download]
A --> S[ScreenShots & Video Recording]
A --> T[Traces]
A --> U[Playwright Configuration]
A --> V[Parallel Execution]
A --> W[Retries & Reports]

```

</details>

---

<details>
  <summary> <b> Playwright Concepts </b>  &emsp;<img src="https://img.shields.io/badge/In--Progress-8A2BE2?style=for-the-badge" /> </summary>
<ol type=1>
<li> Playwright Architecture</li>

<li> Locators
  <ol type=I>
<li> Inbuilt Locators</li>
<li> CSS selector</li>
<li> Xpath</li>
    </ol>
</li>
<li> Mouse actions &emsp;<img src="https://img.shields.io/badge/In--Progress-8A2BE2?style=for-the-badge" />
  <ol type=I>
<li> Hover &emsp;<img src="https://img.shields.io/badge/Completed-success?style=flat" /> </li>
<li> Right Click &emsp;<img src="https://img.shields.io/badge/Completed-success?style=flat" /></li>
<li> Double click &emsp;<img src="https://img.shields.io/badge/Completed-success?style=flat" /></li>
<li> Drag and drop </li>
<li> horizontal slider</li>
<li> vertical slider</li>
    </ol>
</li>
<li> Keyboard actions
  <ol type=I>
<li> single press</li>
<li>holdiing key</li>
    </ol>
</li>
<li> Radio Button</li>
<li> Checkboxes </li>
<li> buttons </li>
<li> File upload/Download</li>
<ol type=I>
<li> single file upload</li>
<li> multi file upload </li>
    </ol>
<li> Alerts/Dialog</li>
<li> Snapshots / Videos</li>
<li> Assertions </li>
</ol>
</details>

---

<details>
  <summary> <b> Playwright Interview Questions </b> </summary>
  <ol type=1> 
 <b>General and Core Concepts </b>
   <li> What is Playwright?</li>
   <li>What are the key features of Playwright?</li>
   <li>What languages does Playwright support?</li>
1. <li>How is Playwright different from Selenium?</li>
2. <li>What are the components of Playwright?</li>
3. <li>What is a BrowserContext in Playwright?</li>
4. <li>What is a Locator?</li>
5. <li>How is auto-waiting implemented in Playwright?</li>
6. <li>What is the role of Expect?</li>
7.  <li>What is the difference between Page and Context?</li>

<b>Browser and Element Interactions</b>

11. <li>How do you handle a browser in Playwright?</li>
12. <li>What is the use of Headless mode in Playwright?</li>
13. <li>How do you capture screenshot in Playwright?</li>
14. <li>How do you record video in Playwright?</li>
15. <li>How do you handle multiple tabs in Playwright?</li>
16. <li>How do you handle popups in Playwright?</li>
17. <li>How do you handle frames in Playwright?</li>
18. <li>How do you run tests in parallel?</li>
19. <li>How do you configure test retries?</li>
20. <li>How do you capture API response in Playwright?</li>
21. <li>How do you mock APIs in Playwright?</li>
22. <li>How do you handle authentication?</li>
23. <li>How do you integrate Playwright with CI/CD?</li>
24. <li>How do you debug tests in Playwright?</li>
25. <li>How do you generate test report in Playwright?</li>

<b>Automation Strategies and Scenarios</b>

26. <li>What is Page Object Model (POM) in Playwright?</li>
27. <li>How do you wait in Playwright?</li>
28. <li>How do you handle file upload?</li>
29. <li>How do you handle scrolling in Playwright?</li>
30. <li>How do you handle alerts in Playwright?</li>
31. <li>How do you perform drag and drop?</li>
32. <li>How do you handle network failures?</li>
33. <li>How do you test on mobile devices?</li>
34. <li>How do you test login functionality?</li>
35. <li>How do you handle cookies in Playwright?</li>
36. <li>What is Trace Viewer in Playwright?</li>
37. <li>How do you generate trace?</li>
38. <li>How do you perform visual testing?</li>
39. <li>How do you test file download?</li>
40. <li>How do you test WebSockets?</li>

<b>Advanced Performance and Maintenance</b>

41. <li>How do you handle slow network?</li>
42. <li>How do you test accessibility?</li>
43. <li>How do you handle sessions and storage?</li>
44. <li>How do you test in different browsers?</li>
45. <li>How do you handle dynamic content?</li>
46. <li>How do you structure a Playwright project?</li>
47. <li>How do you test performance?</li>
48. <li>How do you handle flaky tests?</li>
49. <li>How do you test on different environments?</li>
50. <li>How do you keep tests stable?</li>

✅𝐏𝐥𝐚𝐲𝐰𝐫𝐢𝐠𝐡𝐭 𝐰𝐢𝐭𝐡 𝐀𝐈 𝐓𝐞𝐬𝐭𝐢𝐧𝐠 𝐓𝐫𝐚𝐢𝐧𝐢𝐧𝐠 𝐬𝐭𝐚𝐫𝐭𝐬 𝐨𝐧 𝟓𝐭𝐡 𝐎𝐜𝐭𝐨𝐛𝐞𝐫 𝟐𝟎𝟐𝟔! 𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐧𝐨𝐰 𝐟𝐨𝐫 𝐟𝐫𝐞𝐞 𝐝𝐞𝐦𝐨 𝐜𝐥𝐚𝐬𝐬𝐞𝐬:
https://wa.link/gr8c64
  </ol>
</details>

&emsp;<img src="https://img.shields.io/badge/Completed-success?style=flat" />
&emsp;<img src="https://img.shields.io/badge/In--Progress-8A2BE2?style=for-the-badge" />
