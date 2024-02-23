# CodeToNotion README


# Tutorial for Creating Notion Integration Token with VS Code Plugin

## Step One: Create Notion Integration

1. Search for "notion my integrations" on Google or visit [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations).
![Step 1-1](/codeToNotion_guideImages/1.png "Step 1-1")

2. Create a new Integration:
   - Choose the Notion workspace you want to use.
   - Give the Integration a name.
![Step 1-2](/codeToNotion_guideImages/2.png "Step 1-2")

3. Save the Secrets Token:
   - This Token is your Notion API Token.
![Step 1-3](/codeToNotion_guideImages/3.png "Step 1-3")

## Step Two: Obtain Notion Page ID

1. Return to Notion and create a new Page:
   - The code at the end of the Page URL is the Page ID.
![Step 2-1](/codeToNotion_guideImages/4.png "Step 2-1")

2. Establish an Integration link on that Page:
   - In the Page's three dots on the right, add the Integration created earlier.
![Step 2-2](/codeToNotion_guideImages/5.png "Step 2-2")

## Step Three: Configure the VS Code Plugin

1. Access the "codeToNotion" configuration file:
   - Database ID: (Ignore if this feature has not been added yet)
   - Page ID: The Page ID from Step 4.
   - Token: The Integration Token from Step 3.

2. User ID: Refer to this tutorial:
   - Go to "Settings & Members."
![Step 3-2-1](/codeToNotion_guideImages/6.png "Step 3-2-1")

   - Open F12 Developer Tools.
   - Navigate to "My Account."
![Step 3-2-2](/codeToNotion_guideImages/7.png "Step 3-2-2")

   - Check the response of "authGetLoginConfiguration."
   - Find and copy the userId.
![Step 3-2-3](/codeToNotion_guideImages/8.png "Step 3-2-3")

You have now completed the VS Code Plugin Notion Integration setup. Remember to save the settings and enjoy the convenience of using the plugin!

**Usage:**

1. Select the code you want to save, right-click, and choose "sendCodeToNotion."
![Usage1](/codeToNotion_guideImages/9.png "sendCodeToNotion")

2. Create the desired name for storage.
3. Choose the code type.
![Usage2](/codeToNotion_guideImages/10.png "Code Language")

## ----------------------------------------------------------------------------------------------------------

# 建立 Notion Integration Token 的 VS Code 插件教學

## 步驟一：建立 Notion Integration

1. 在 Google 中搜尋 "notion my integrations" 或進入 [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)。
![Step 1-1](/codeToNotion_guideImages/1.png "Step 1-1")

2. 創建新的 Integration：
   - 選擇欲使用的 Notion 工作區。
   - 給 Integration 取一個名稱。
![Step 1-2](/codeToNotion_guideImages/2.png "Step 1-2")

3. 保留 Secrets 的 Token：
   - 這個 Token 就是 Notion 的 API Token。
![Step 1-3](/codeToNotion_guideImages/3.png "Step 1-3")

## 步驟二：取得 Notion Page ID

1. 回到 Notion，建立新的 Page：
   - Page 網址後面的代碼即為 Page ID。
![Step 2-1](/codeToNotion_guideImages/4.png "Step 2-1")

2. 在該 Page 中建立 Integration 連結：
   - 在 Page 右側的三個點點中加入之前建立的 Integration。
![Step 2-2](/codeToNotion_guideImages/5.png "Step 2-2")

## 步驟三：設定 VS Code 插件

1. 進入 "codeToNotion" 設定檔：
   - Database ID: (如果尚未加入該功能可忽略)
   - Page ID: 第 4 步的 Page ID。
   - Token: 第 3 步的 Integration Token。

2. User ID: 可參考 [這個網站教學](https://notionanswers.com/2271/how-do-i-get-user-id-without-using-the-api)：
   - 進入 "Setting & Members"。
![Step 3-2-1](/codeToNotion_guideImages/6.png "Step 3-2-1")

   - 開啟 F12 開發者工具。
   - 進入 "My Account"。
![Step 3-2-2](/codeToNotion_guideImages/7.png "Step 3-2-2")

   - 檢查 "authGetLoginConfiguration" 的 response。
   - 找到並複製 userId。
![Step 3-2-3](/codeToNotion_guideImages/8.png "Step 3-2-3")

這樣你就完成了 VS Code 插件的 Notion Integration 設定。記得保存設定，並享受使用插件的便利！

**使用方式 :**
1. 選取想儲存的代碼，按下右鍵，選擇 sendCodeToNotion。
![Usage1](/codeToNotion_guideImages/9.png "sendCodeToNotion。")

2. 建立要儲存的名稱。
3. 選擇代碼類型。
![Usage2](/codeToNotion_guideImages/10.png "Code Language")

## Version
### 1.0.0

Initial release of

### 1.0.1
Add document


