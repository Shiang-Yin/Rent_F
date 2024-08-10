// 台灣縣市清單
const area_data = {
    '臺北市': [
        '中正區', '大同區', '中山區', '萬華區', '信義區', '松山區', '大安區', '南港區', '北投區', '內湖區', '士林區', '文山區'
    ],
    '新北市': [
        '板橋區', '新莊區', '泰山區', '林口區', '淡水區', '金山區', '八里區', '萬里區', '石門區', '三芝區', '瑞芳區', '汐止區', '平溪區', '貢寮區', '雙溪區', '深坑區', '石碇區', '新店區', '坪林區', '烏來區', '中和區', '永和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '蘆洲區', '五股區'
    ],
    '基隆市': [
        '仁愛區', '中正區', '信義區', '中山區', '安樂區', '暖暖區', '七堵區'
    ],
    '桃園市': [
        '桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '龜山區', '龍潭區', '大溪區', '大園區', '觀音區', '新屋區', '復興區'
    ],
    '新竹縣': [
        '竹北市', '竹東鎮', '新埔鎮', '關西鎮', '峨眉鄉', '寶山鄉', '北埔鄉', '橫山鄉', '芎林鄉', '湖口鄉', '新豐鄉', '尖石鄉', '五峰鄉'
    ],
    '新竹市': [
        '東區', '北區', '香山區'
    ],
    '苗栗縣': [
        '苗栗市', '通霄鎮', '苑裡鎮', '竹南鎮', '頭份鎮', '後龍鎮', '卓蘭鎮', '西湖鄉', '頭屋鄉', '公館鄉', '銅鑼鄉', '三義鄉', '造橋鄉', '三灣鄉', '南庄鄉', '大湖鄉', '獅潭鄉', '泰安鄉'
    ],
    '臺中市': [
        '中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '東勢區', '石岡區', '新社區', '和平區', '神岡區', '潭子區', '大雅區', '大肚區', '龍井區', '沙鹿區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'
    ],
    '南投縣': [
        '南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'
    ],
    '彰化縣': [
        '彰化市', '員林鎮', '和美鎮', '鹿港鎮', '溪湖鎮', '二林鎮', '田中鎮', '北斗鎮', '花壇鄉', '芬園鄉', '大村鄉', '永靖鄉', '伸港鄉', '線西鄉', '福興鄉', '秀水鄉', '埔心鄉', '埔鹽鄉', '大城鄉', '芳苑鄉', '竹塘鄉', '社頭鄉', '二水鄉', '田尾鄉', '埤頭鄉', '溪州鄉'
    ],
    '雲林縣': [
        '斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '莿桐鄉', '林內鄉', '古坑鄉', '大埤鄉', '崙背鄉', '二崙鄉', '麥寮鄉', '臺西鄉', '東勢鄉', '褒忠鄉', '四湖鄉', '口湖鄉', '水林鄉', '元長鄉'
    ],
    '嘉義縣': [
        '太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'
    ],
    '嘉義市': [
        '東區', '西區'
    ],
    '臺南市': [
        '中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'
    ],
    '高雄市': [
        '楠梓區', '左營區', '鼓山區', '三民區', '鹽埕區', '前金區', '新興區', '苓雅區', '前鎮區', '小港區', '旗津區', '鳳山區', '大寮區', '鳥松區', '林園區', '仁武區', '大樹區', '大社區', '岡山區', '路竹區', '橋頭區', '梓官區', '彌陀區', '永安區', '燕巢區', '田寮區', '阿蓮區', '茄萣區', '湖內區', '旗山區', '美濃區', '內門區', '杉林區', '甲仙區', '六龜區', '茂林區', '桃源區', '那瑪夏區'
    ],
    '屏東縣': [
        '屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '霧台鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉', '三地門鄉'
    ],
    '宜蘭縣': [
        '宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'
    ],
    '花蓮縣': [
        '花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '秀林鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '富里鄉', '卓溪鄉'
    ],
    '臺東縣': [
        '臺東市', '成功鎮', '關山鎮', '長濱鄉', '海端鄉', '池上鄉', '東河鄉', '鹿野鄉', '延平鄉', '卑南鄉', '金峰鄉', '大武鄉', '達仁鄉', '綠島鄉', '蘭嶼鄉', '太麻里鄉'
    ],
    '澎湖縣': [
        '馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'
    ],
    '金門縣': [
        '金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'
    ],
    '連江縣': [
        '南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'
    ]
}

// 取得 select 元素
const search_address = document.getElementById('search_address');
const search_district = document.getElementById('search_district');

// 填充縣市選項
for (const city in area_data) { // 遍歷 area_data 中的每個縣市
    const option = document.createElement('option'); // 創建一個新的 <option> 元素
    option.value = city; // 設置 <option> 的 value 屬性為縣市名
    option.textContent = city; // 設置 <option> 顯示的文字為縣市名
    search_address.appendChild(option); // 將 <option> 元素添加到縣市選擇框中
}



// 監聽縣市選擇的變化
search_address.addEventListener('change', function() { // 為縣市選擇框添加 change 事件監聽器
    search_district.innerHTML = '<option value="">選擇地區</option>'; // 清空地區選擇框中的所有選項，並添加預設的提示選項

    const selectedCity = search_address.value; // 取得選中的縣市值
    
    if (area_data[selectedCity]) { // 檢查選中的縣市是否在 area_data 中存在
        area_data[selectedCity].forEach(district => { // 遍歷選中縣市的所有地區
            const option = document.createElement('option'); // 創建一個新的 <option> 元素
            option.value = district; // 設置 <option> 的 value 屬性為地區名
            option.textContent = district; // 設置 <option> 顯示的文字為地區名
            search_district.appendChild(option); // 將 <option> 元素添加到地區選擇框中
        });
    }
    // 重新加載房間資料
    fetchRoomData();
});

function fetchRoomData() {
    const ownerAccount = ""; // 後端API的帳號
    // const city = search_address.value;
    // const district = search_district.value;

    console.log('Fetching data with city:', search_address.value, 'and district:', search_district.value);
    
    // 發送 POST 請求
    fetch('http://localhost:8080/room/allInformation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ownerAccount }) // 傳送的請求體只包含 ownerAccount
    })
    .then(response => response.json())
    .then(data => {
        if (data.code === 200) {
            const roomContainer = document.getElementById('roomContainer'); //前端房間顯示資訊的id
            roomContainer.innerHTML = '';  //清空所有資料

            // 獲取當前日期
            const today = new Date().toISOString().split('T')[0];

            // 過濾房間列表
            const filteredRooms = data.roomList.filter(room => {
                const relatedContract = data.contractList.find(contract => contract.address === room.address);
                if (relatedContract) {
                    const endDate = relatedContract.cutDate ? relatedContract.cutDate : relatedContract.endDate;
                    return endDate <= today;
                }
                return true;
            });

            // 根據選擇的縣市和地區進行過濾
            const finalRooms = filteredRooms.filter(room => {
                
                const address = room.address

                const matchesCity = search_address.value!='' ? address.includes(search_address.value) : true; // 如果有選擇縣市，檢查地址是否包含該縣市，否則不過濾
                const matchesDistrict = search_district.value!='' ? address.includes(search_district.value) : true; // 如果有選擇地區，檢查地址是否包含該地區，否則不過濾

                return matchesCity && matchesDistrict; // 返回符合條件的房間
            });
            console.log('Filtered Rooms:', filteredRooms);
            console.log('Final Rooms:', finalRooms);

            // 遍歷過濾後的房間列表並生成 HTML
            finalRooms.forEach(room => {
                const roomDiv = document.createElement('div');
                roomDiv.className = 'roomAll';

                roomDiv.innerHTML = `
                    <img src="data:image/jpeg;base64,${room.photo}" alt="暫無提供照片" />
                    <h2>${room.roomId}</h2>
                    <p>地址: ${room.address}</p>
                    <p>價格: ${room.rentP}</p>
                `;

                roomContainer.appendChild(roomDiv);
            });
        } else {
            console.error('API 回應錯誤:', data.message);
        }
    })
    .catch(error => {
        console.error('錯誤:', error);
    });

}

// 監聽縣市和地區選擇的變化
search_address.addEventListener('change', fetchRoomData);
search_district.addEventListener('change', fetchRoomData);

// 初次載入時顯示所有房間
fetchRoomData();

// // 所有空房資訊
// // 定義請求體，包含 ownerAccount
// const requestData = {
//     ownerAccount: "" // 用實際的帳號替換 ""
// };

// // 發送 POST 請求
// fetch('http://localhost:8080/room/allInformation', {
//     method: 'POST', // 使用 POST 方法
//     headers: {
//         'Content-Type': 'application/json' // 設置請求頭為 JSON
//     },
//     body: JSON.stringify(requestData) // 將請求體轉換為 JSON 字符串
// })
// .then(response => response.json()) // 將回應轉為 JSON
// .then(data => {
//     if (data.code === 200) { // 檢查 API 回應狀態
//         const roomContainer = document.getElementById('roomContainer');
//         roomContainer.innerHTML = ''; // 清空容器中的內容

//         // 獲取當前日期
//         const today = new Date().toISOString().split('T')[0]; // 取得當前日期，格式為 'YYYY-MM-DD'

//         // 遍歷契約書並過濾掉結束時間在今日之後的契約
//         const validRoomList = data.roomList.filter(room => {
//             // 找到該房間相關的契約
//             const relatedContract = data.contractList.find(contract => contract.address === room.address);
//             if (relatedContract) {
//                 // 計算契約的結束時間
//                 const endDate = relatedContract.cutDate ? relatedContract.cutDate : relatedContract.endDate;
//                 // 比對契約的結束時間是否在今天之後
//                 return endDate <= today;
//             }
//             // 如果沒有找到相關契約，則顯示該房間
//             return true;
//         });

//         // 遍歷過濾後的房間列表並生成 HTML
//         validRoomList.forEach(room => {
//             const roomDiv = document.createElement('div');
//             roomDiv.className = 'roomAll';

//             roomDiv.innerHTML = `
//                 <img src="data:image/jpeg;base64,${room.photo}" alt="暫無提供照片"  />
//                 <h2>${room.roomId}</h2>
//                 <p>地址: ${room.address}</p>
//                 <p>價格: ${room.rentP}</p>
//             `;

//             roomContainer.appendChild(roomDiv); // 將生成的 HTML 加入到容器中
//         });
//     } else {
//         console.error('API 回應錯誤:', data.message);
//     }
// })
// .catch(error => {
//     console.error('錯誤:', error);
// });
