// Series 100 Data
window.galleryData = window.galleryData || [];

// Image 1: 103.webp - Station to Hospital Route
window.galleryData.push(
    {
        imageFile: "103.webp",
        spots: [
            {
                top: "52%", left: "68%", width: "25%", height: "25%", color: "#3498db",
                title: "Departure Point",
                eng: "The route begins at the train station, which is marked with a clear blue sign and a train icon.",
                jp: "ルートは、青い看板と電車のアイコンではっきりと示された鉄道駅から始まります。",
                vocab: ["departure (出発)", "indicate (示す)", "icon (アイコン/図記号)"],
                idioms: ["A to B (A地点からB地点へ)"],
                synonyms: ["start point", "origin"],
                grammar: "受動態 (is marked) が使われており、駅が地図上でどのように表示されているかを客観的に説明しています。"
            },
            {
                top: "45%", left: "5%", width: "70%", height: "10%", color: "#e74c3c",
                title: "The Route",
                eng: "A red dotted line traces the path along the street, showing the walking directions to the destination.",
                jp: "赤い点線が通りに沿って経路をたどり、目的地への徒歩での道順を示しています。",
                vocab: ["trace (たどる)", "dotted line (点線)", "direction (道順/方向)"],
                idioms: ["on the right track (正しい方向に進んで)"],
                synonyms: ["path", "course"],
                grammar: "現在分詞の形容詞的用法 (showing...) が、直前の文の内容を補足説明しています。"
            },
            {
                top: "8%", left: "38%", width: "25%", height: "25%", color: "#2ecc71",
                title: "Destination",
                eng: "The hospital is located a few blocks away from the station, serving as the final destination of this map.",
                jp: "病院は駅から数ブロック離れた場所にあり、この地図の最終目的地となっています。",
                vocab: ["located (位置して)", "block (区画)", "final (最終の)"],
                idioms: ["end of the road (行き止まり/終わり)"],
                synonyms: ["goal", "terminus"],
                grammar: "Serving as... は分詞構文で、病院がどのような役割を果たしているかを説明しています。"
            }
        ]
    }
);

// Image 2: 102.webp - Arriving at the Hospital
window.galleryData.push(
    {
        imageFile: "102.webp",
        spots: [
            {
                top: "8%", left: "42%", width: "20%", height: "20%", color: "#e67e22",
                title: "The Facility",
                eng: "This large building with a cross symbol represents a hospital where patients receive medical treatment.",
                jp: "十字のシンボルが付いたこの大きな建物は、患者が治療を受ける病院を表しています。",
                vocab: ["represent (表す)", "patient (患者)", "treatment (治療)"],
                idioms: ["safe and sound (無事に)"],
                synonyms: ["medical center", "clinic"],
                grammar: "関係副詞 where が使われており、先行詞 hospital の中で何が行われるかを説明しています。"
            },
            {
                top: "12%", left: "62%", width: "35%", height: "15%", color: "#3498db",
                title: "Clear Signage",
                eng: "A prominent blue label is attached to the building to identify it clearly for anyone looking for it.",
                jp: "建物を探している人が誰でもはっきりと分かるように、目立つ青いラベルが建物に付けられています。",
                vocab: ["prominent (目立つ)", "label (ラベル/表示)", "identify (特定する)"],
                idioms: ["stand out (目立つ)"],
                synonyms: ["sign", "tag"],
                grammar: "不定詞の副詞的用法 (to identify...) が、ラベルが付けられている「目的」を表しています。"
            },
            {
                top: "10%", left: "36%", width: "5%", height: "75%", color: "#9b59b6",
                title: "Straight Path",
                eng: "The path continues straight up the road, leading visitors directly to the hospital entrance.",
                jp: "道は道路をまっすぐ上へと続き、来訪者を病院の入り口へと直接導いています。",
                vocab: ["straight (まっすぐに)", "lead (導く)", "entrance (入り口)"],
                idioms: ["straight as an arrow (真っ直ぐに)"],
                synonyms: ["directly", "unswervingly"],
                grammar: "Leading visitors... は分詞構文で、道が続いている結果として何が起こるかを描写しています。"
            }
        ]
    }
);

// 1. Line Graph - Upward Trend
window.galleryData.push(
    {
        imageFile: "103.webp",
        series: "100",
        spots: [
            {
                top: "15%", left: "80%", width: "15%", height: "20%", color: "#e67e22",
                title: "Significant Increase",
                eng: "There is a sharp upward trend at the end of the graph, showing that the numbers have grown significantly over time.",
                jp: "グラフの最後には急激な上昇傾向があり、数値が時間とともに大幅に増加したことを示しています。",
                vocab: ["sharp (急激な)", "upward (上向きの)", "trend (傾向)"],
                idioms: ["over time (時間をかけて)"],
                synonyms: ["rise", "growth"],
                grammar: "文末に現在分詞句(showing...)を伴い、'There is + 名詞'の構文で存在を示しています。"
            },
            {
                top: "40%", left: "30%", width: "20%", height: "25%", color: "#3498db",
                title: "Moderate Fluctuation",
                eng: "There are some small fluctuations in the middle of the red line, but the overall direction remains positive and steady.",
                jp: "赤い線の中ほどにいくつかの小さな変動がありますが、全体的な方向性はプラスで安定したままです。",
                vocab: ["fluctuation (変動)", "overall (全体的な)", "steady (安定した)"],
                idioms: ["in the middle of (〜の真ん中に)"],
                synonyms: ["variation", "change"],
                grammar: "複数学の主語(fluctuations)に合わせて、'There are'を使用しています。"
            },
            {
                top: "5%", left: "5%", width: "90%", height: "90%", color: "#2ecc71",
                title: "Grid Background",
                eng: "There is a white grid background behind the red arrow to help viewers measure the specific changes in the data.",
                jp: "赤い矢印の背後には白い格子の背景があり、視聴者がデータの特定の変化を測定するのを助けています。",
                vocab: ["grid (格子)", "measure (測定する)", "specific (特定の)"],
                idioms: ["help someone do (人が〜するのを助ける)"],
                synonyms: ["background", "backdrop"],
                grammar: "場所を表す副詞句(behind the red arrow)を伴う存在文です。"
            }
        ]
    }
);

// 2. Line Graph - Downward Trend
window.galleryData.push(
    {
        imageFile: "104.webp",
        series: "100",
        spots: [
            {
                top: "60%", left: "75%", width: "20%", height: "30%", color: "#e74c3c",
                title: "Sudden Drop",
                eng: "There is a dramatic decline in the latter half of the graph, where the red line falls below the green axis.",
                jp: "グラフの後半には劇的な下落があり、そこでは赤い線が緑の軸を下回っています。",
                vocab: ["dramatic (劇的な)", "decline (減少)", "axis (軸)"],
                idioms: ["fall below (〜を下回る)"],
                synonyms: ["decrease", "drop"],
                grammar: "関係副詞whereを用いて、decline（減少）が起きている場所の状態を説明しています。"
            },
            {
                top: "15%", left: "45%", width: "15%", height: "15%", color: "#f1c40f",
                title: "The Peak Point",
                eng: "There is a peak at the highest point of the chart before the value begins its long and continuous descent.",
                jp: "数値が長く連続的な下降を始める前に、チャートの最高点にピーク（頂点）があります。",
                vocab: ["peak (頂点)", "continuous (連続的な)", "descent (下降)"],
                idioms: ["at the point of (〜の時点で)"],
                synonyms: ["summit", "top"],
                grammar: "単数名詞(peak)を導く'There is'構文の典型的な形です。"
            },
            {
                top: "70%", left: "5%", width: "90%", height: "5%", color: "#27ae60",
                title: "Horizontal Base Line",
                eng: "There is a solid green horizontal line that serves as a baseline for comparing the different stages of the data.",
                jp: "データの異なる段階を比較するための基準線として機能する、実線の緑の水平線があります。",
                vocab: ["solid (実線の)", "horizontal (水平の)", "baseline (基準線)"],
                idioms: ["serve as (〜として役立つ)"],
                synonyms: ["level", "standard"],
                grammar: "関係代名詞thatを使用して、存在する物(line)の特徴を詳しく記述しています。"
            }
        ]
    }
);

// 3. Bar Chart - Steady Growth
window.galleryData.push(
    {
        imageFile: "105.webp",
        series: "100",
        spots: [
            {
                top: "15%", left: "30%", width: "40%", height: "10%", color: "#8e44ad",
                title: "Chart Title",
                eng: "There is a clear title at the top of the tablet screen that labels the data as Monthly Sales.",
                jp: "タブレット画面の上部には、データを「月間売上」としてラベル付けする明確なタイトルがあります。",
                vocab: ["clear (明確な)", "label (ラベルを貼る)", "monthly (月間の)"],
                idioms: ["at the top of (〜の頂部に)"],
                synonyms: ["heading", "caption"],
                grammar: "場所の前置詞句(at the top of...)を用いて、存在位置を特定しています。"
            },
            {
                top: "25%", left: "15%", width: "75%", height: "55%", color: "#e67e22",
                title: "Increasing Bars",
                eng: "There are eight blue bars on the chart, and each one is taller than the previous month's bar.",
                jp: "チャート上には8本の青い棒があり、それぞれが前月の棒よりも高くなっています。",
                vocab: ["previous (前の)", "taller (より高い)", "bar (棒)"],
                idioms: ["each one (それぞれ)"],
                synonyms: ["column", "pillar"],
                grammar: "数量表現(eight)を含み、複数の存在を示す'There are'を使用しています。"
            },
            {
                top: "78%", left: "18%", width: "70%", height: "10%", color: "#3498db",
                title: "Time Period Labels",
                eng: "There are abbreviated names for the months from January to August displayed along the bottom horizontal axis.",
                jp: "下の水平軸に沿って、1月から8月までの月の略称が表示されています。",
                vocab: ["abbreviated (短縮された)", "display (表示する)", "along (〜に沿って)"],
                idioms: ["from A to B (AからBまで)"],
                synonyms: ["shortened", "labeled"],
                grammar: "過去分詞(displayed)が前の名詞(names)を修飾する形での存在表現です。"
            }
        ]
    }
);

// 4. Bar Chart - Seasonal Fluctuation
window.galleryData.push(
    {
        imageFile: "106.webp",
        series: "100",
        spots: [
            {
                top: "30%", left: "60%", width: "10%", height: "50%", color: "#e74c3c",
                title: "Maximum Sales",
                eng: "There is a peak in sales during June, which is the highest blue bar visible on the tablet screen.",
                jp: "6月に売上のピークがあり、それはタブレット画面で見える最も高い青い棒です。",
                vocab: ["during (〜の間)", "visible (見える)", "maximum (最大の)"],
                idioms: ["peak in (〜の頂点)"],
                synonyms: ["highest point", "climax"],
                grammar: "非制限用法の関係代名詞(which)を使い、存在する物に追加情報を加えています。"
            },
            {
                top: "70%", left: "75%", width: "15%", height: "10%", color: "#f1c40f",
                title: "Sales Decline",
                eng: "There is a noticeable decrease in the number of sales between June and August in this particular dataset.",
                jp: "この特定のデータセットでは、6月から8月の間に売上数の顕著な減少があります。",
                vocab: ["noticeable (目立つ)", "decrease (減少)", "particular (特定の)"],
                idioms: ["between A and B (AとBの間)"],
                synonyms: ["reduction", "decline"],
                grammar: "数量の減少(decrease in the number)という抽象的な存在を'There is'で表現しています。"
            },
            {
                top: "25%", left: "10%", width: "10%", height: "55%", color: "#2ecc71",
                title: "Vertical Scale",
                eng: "There is a vertical scale on the left side with numbers ranging from zero to thirty-five.",
                jp: "左側には、0から35までの数字が並ぶ垂直の目盛りがあります。",
                vocab: ["vertical (垂直の)", "scale (目盛り)", "range (範囲が及ぶ)"],
                idioms: ["on the left side (左側に)"],
                synonyms: ["axis", "measure"],
                grammar: "現在分詞(ranging)を用いて、存在する物(scale)の範囲を説明しています。"
            }
        ]
    }
);

// 5. Navigation - Fast Route
window.galleryData.push(
    {
        imageFile: "107.webp",
        series: "100",
        spots: [
            {
                top: "28%", left: "17%", width: "66%", height: "18%", color: "#3498db",
                title: "Route Information",
                eng: "There is a notification box showing that the fast route by car takes fifteen minutes for five kilometers.",
                jp: "車での快速ルートは5キロメートルで15分かかることを示す通知ボックスがあります。",
                vocab: ["notification (通知)", "route (ルート)", "fast (速い)"],
                idioms: ["by car (車で)"],
                synonyms: ["path", "way"],
                grammar: "'There is + 名詞 + 現在分詞'の形で、何かが〜している状態の存在を示しています。"
            },
            {
                top: "52%", left: "18%", width: "65%", height: "25%", color: "#2ecc71",
                title: "Blue Path",
                eng: "There is a blue line on the map representing the suggested path from the current location to the destination.",
                jp: "現在地から目的地までの提案された経路を表す青い線が地図上にあります。",
                vocab: ["represent (表す)", "location (場所)", "destination (目的地)"],
                idioms: ["from A to B (AからBまで)"],
                synonyms: ["current", "present"],
                grammar: "場所(on the map)と役割(representing...)を組み合わせた存在表現です。"
            },
            {
                top: "14%", left: "36%", width: "28%", height: "12%", color: "#8e44ad",
                title: "Transport Modes",
                eng: "There are three icons at the top of the screen for different modes of transport, including cars and bicycles.",
                jp: "画面上部には、車や自転車を含む異なる交通手段のための3つのアイコンがあります。",
                vocab: ["icon (アイコン)", "mode (様式/手段)", "transport (交通)"],
                idioms: ["at the top of (〜の上部に)"],
                synonyms: ["method", "means"],
                grammar: "数量(three)を明示し、'There are'で複数の物の存在を述べています。"
            }
        ]
    }
);

// 6. Navigation - Traffic
window.galleryData.push(
    {
        imageFile: "108.webp",
        series: "100",
        spots: [
            {
                top: "28%", left: "17%", width: "66%", height: "18%", color: "#e74c3c",
                title: "Traffic Warning",
                eng: "There is a red text warning about traffic ahead, which increases the estimated travel time to twenty-five minutes.",
                jp: "前方渋滞を警告する赤い文字があり、それにより推定旅行時間が25分に増加しています。",
                vocab: ["traffic (交通/渋滞)", "ahead (前方に)", "estimated (推定された)"],
                idioms: ["ahead of (〜の先に)"],
                synonyms: ["congestion", "jam"],
                grammar: "不可算名詞(traffic)や警告の存在を'There is'で表現し、非制限用法のwhichで結果を補足しています。"
            },
            {
                top: "52%", left: "40%", width: "20%", height: "20%", color: "#e67e22",
                title: "Congested Section",
                eng: "There is a red section in the middle of the route indicating heavy traffic in that specific area.",
                jp: "ルートの途中に、その特定のエリアでの激しい渋滞を示す赤いセクションがあります。",
                vocab: ["section (区間)", "indicate (示す)", "heavy (激しい)"],
                idioms: ["in the middle of (〜の真ん中に)"],
                synonyms: ["part", "segment"],
                grammar: "現在分詞(indicating)を使って、存在するセクションの意味内容を説明しています。"
            },
            {
                top: "14%", left: "36%", width: "28%", height: "12%", color: "#3498db",
                title: "Walking Option",
                eng: "There is a walking icon on the right side of the vehicle options, although the car is currently selected.",
                jp: "現在は車が選択されていますが、乗り物オプションの右側には歩行アイコンがあります。",
                vocab: ["option (選択肢)", "currently (現在は)", "select (選択する)"],
                idioms: ["on the right side (右側に)"],
                synonyms: ["choice", "alternative"],
                grammar: "逆説の接続詞(although)を使いつつ、'There is'で特定の選択肢の存在を示しています。"
            }
        ]
    }
);

// 7. Floor Map - 1st Floor Focus
window.galleryData.push(
    {
        imageFile: "109.webp",
        series: "100",
        spots: [
            {
                top: "70%", left: "18%", width: "25%", height: "25%", color: "#3498db",
                title: "The Bookstore",
                eng: "There is a large bookstore on the first floor, located right next to the main entrance of the building.",
                jp: "建物のメインエントランスのすぐ隣、1階に大きな書店があります。",
                vocab: ["bookstore (書店)", "located (位置する)", "entrance (入り口)"],
                idioms: ["next to (〜の隣に)"],
                synonyms: ["shop", "store"],
                grammar: "場所を表す前置詞句(on the first floor)を使い、書店の存在を述べています。"
            },
            {
                top: "70%", left: "55%", width: "25%", height: "25%", color: "#e67e22",
                title: "The Cafe",
                eng: "There is a cozy cafe across from the bookstore where visitors can relax and have a drink.",
                jp: "書店の向かいには、訪問者がリラックスして飲み物を飲むことができる居心地の良いカフェがあります。",
                vocab: ["cozy (居心地の良い)", "across from (〜の向かいに)", "relax (リラックスする)"],
                idioms: ["have a drink (飲み物を飲む)"],
                synonyms: ["cafeteria", "coffee shop"],
                grammar: "関係副詞whereを用いて、存在する場所(cafe)でできる行動を記述しています。"
            },
            {
                top: "72%", left: "45%", width: "10%", height: "15%", color: "#e74c3c",
                title: "Current Position",
                eng: "There is a red 'You Are Here' marker placed between the bookstore and the cafe on the map.",
                jp: "地図上の書店とカフェの間に、赤色の「現在地」マーカーが置かれています。",
                vocab: ["marker (標識)", "placed (置かれた)", "between (〜の間に)"],
                idioms: ["you are here (現在地)"],
                synonyms: ["indicator", "pointer"],
                grammar: "受動的な意味を持つ過去分詞(placed)を伴い、マーカーの存在状態を説明しています。"
            }
        ]
    }
);

// 8. Floor Map - 2nd Floor Focus
window.galleryData.push(
    {
        imageFile: "110.webp",
        series: "100",
        spots: [
            {
                top: "10%", left: "18%", width: "30%", height: "25%", color: "#2ecc71",
                title: "The Shoe Store",
                eng: "There is a green area labeled Shoe Store on the second floor, which can be reached by using the escalator.",
                jp: "2階には「靴屋」とラベル付けされた緑色のエリアがあり、エスカレーターを使って行くことができます。",
                vocab: ["labeled (ラベルを貼られた)", "reached (到着した)", "escalator (エスカレーター)"],
                idioms: ["on the second floor (2階に)"],
                synonyms: ["footwear shop", "retailer"],
                grammar: "非制限用法のwhich節で、その場所へのアクセス方法（存在への到達手段）を補足しています。"
            },
            {
                top: "35%", left: "45%", width: "10%", height: "25%", color: "#95a5a6",
                title: "Escalator Access",
                eng: "There are three escalators in the center of the mall connecting the first floor and the second floor.",
                jp: "モールの中心には、1階と2階をつなぐ3基のエスカレーターがあります。",
                vocab: ["center (中心)", "mall (モール)", "connect (つなぐ)"],
                idioms: ["in the center of (〜の中心に)"],
                synonyms: ["moving stairs", "lifter"],
                grammar: "数量表現(three)を伴う'There are'構文で、複数の設備があることを示しています。"
            },
            {
                top: "70%", left: "18%", width: "25%", height: "25%", color: "#f1c40f",
                title: "Toy Store Location",
                eng: "There is a yellow toy store directly below the shoe store, making it easy for families to find.",
                jp: "靴屋の真下に黄色の玩具店があり、家族連れが見つけやすくなっています。",
                vocab: ["below (〜の下に)", "directly (直接/真下に)", "families (家族)"],
                idioms: ["make it easy (〜を容易にする)"],
                synonyms: ["under", "beneath"],
                grammar: "位置関係(below)を明示し、結果を表す分詞構文(making...)で存在の利点を述べています。"
            }
        ]
    }
);

// 9. Pie Chart - Production A
window.galleryData.push(
    {
        imageFile: "111.webp",
        series: "100",
        spots: [
            {
                top: "20%", left: "45%", width: "25%", height: "30%", color: "#2ecc71",
                title: "Kumamoto Share",
                eng: "There is a twenty-five percent share for Kumamoto, indicating its status as a major tomato producer in Japan.",
                jp: "熊本のシェアは25％であり、日本における主要なトマト生産地としての地位を示しています。",
                vocab: ["share (分担/シェア)", "indicate (示す)", "major (主要な)"],
                idioms: ["major producer (主要な生産者)"],
                synonyms: ["portion", "percentage"],
                grammar: "数量(twenty-five percent)を含む存在文で、図表内の割合を説明しています。"
            },
            {
                top: "25%", left: "25%", width: "25%", height: "55%", color: "#e67e22",
                title: "Other Prefectures",
                eng: "There is a large brown section representing fifty percent, which includes all other prefectures not listed individually.",
                jp: "50％を表す大きな茶色のセクションがあり、これには個別に記載されていない他のすべての都道府県が含まれます。",
                vocab: ["represent (表す)", "prefectures (都道府県)", "individually (個別に)"],
                idioms: ["not listed (記載されていない)"],
                synonyms: ["others", "remaining"],
                grammar: "関係代名詞whichを使い、'Others'というカテゴリーの存在内容を具体化しています。"
            },
            {
                top: "60%", left: "45%", width: "15%", height: "25%", color: "#3498db",
                title: "Ibaraki Share",
                eng: "There is a ten percent slice for Ibaraki, which is the smallest specific region shown in this pie chart.",
                jp: "茨城には10％の区分があり、この円グラフに示されている特定の地域の中では最小です。",
                vocab: ["slice (区分/一切れ)", "region (地域)", "specific (特定の)"],
                idioms: ["pie chart (円グラフ)"],
                synonyms: ["segment", "part"],
                grammar: "最上級(smallest)を含む関係節で、存在する特定の区分の特徴を強調しています。"
            }
        ]
    }
);

// 10. Pie Chart - Production B (Comparison)
window.galleryData.push(
    {
        imageFile: "112.webp",
        series: "100",
        spots: [
            {
                top: "15%", left: "45%", width: "25%", height: "45%", color: "#8e44ad",
                title: "Increased Share",
                eng: "There is a thirty percent share for Kumamoto in this version, which is five percent higher than the previous chart.",
                jp: "このバージョンでは熊本のシェアは30％であり、前のグラフより5％高くなっています。",
                vocab: ["version (版)", "higher (より高い)", "previous (前の)"],
                idioms: ["higher than (〜より高い)"],
                synonyms: ["increased", "larger"],
                grammar: "比較表現(higher than)を伴う関係節で、存在の変化を記述しています。"
            },
            {
                top: "55%", left: "45%", width: "25%", height: "30%", color: "#e67e22",
                title: "Hokkaido Production",
                eng: "There is a fifteen percent section for Hokkaido, making it the second largest specific producer on the list.",
                jp: "北海道には15％のセクションがあり、リストの中で2番目に大きな特定の生産地となっています。",
                vocab: ["section (区分)", "second (2番目の)", "producer (生産者)"],
                idioms: ["on the list (リストの中で)"],
                synonyms: ["part", "area"],
                grammar: "序数(second largest)を使い、円グラフ内の特定の存在の順位を説明しています。"
            },
            {
                top: "25%", left: "25%", width: "25%", height: "55%", color: "#2ecc71",
                title: "Others Category",
                eng: "There is a forty-five percent portion for others, showing that tomato production is distributed across many areas.",
                jp: "その他には45％の部分があり、トマト生産が多くの地域に分散していることを示しています。",
                vocab: ["portion (部分)", "distribute (分散する)", "across (〜にわたって)"],
                idioms: ["across many areas (多くの地域にわたって)"],
                synonyms: ["sector", "share"],
                grammar: "現在分詞句(showing...)を使い、データの数値の存在が何を意味するかを解説しています。"
            }
        ]
    }
);
// 1. Potato Production Share (80%)
window.galleryData.push(
    {
        imageFile: "113.webp",
        series: "100",
        spots: [
            {
                top: "30%", left: "55%", width: "40%", height: "55%", color: "#f1c40f",
                title: "Dominant Share",
                eng: "There is an overwhelming eighty percent share for Hokkaido, which makes it the largest potato producer by far.",
                jp: "北海道には圧倒的な80％のシェアがあり、群を抜いて最大のじゃがいも生産地となっています。",
                vocab: ["overwhelming (圧倒的な)", "dominant (支配的な)", "producer (生産者)"],
                idioms: ["by far (はるかに/群を抜いて)"],
                synonyms: ["massive", "huge"],
                grammar: "数量表現(eighty percent)を主語に据え、'There is'でその存在を強調しています。"
            },
            {
                top: "120px", left: "100px", width: "150px", height: "150px", color: "#e67e22",
                title: "Minor Prefectures",
                eng: "There are several minor prefectures listed on the left, including Nagasaki and Kagoshima with smaller percentages.",
                jp: "左側には長崎や鹿児島など、少ないパーセンテージのいくつかの小規模な県が記載されています。",
                vocab: ["several (いくつかの)", "minor (小さい方の)", "percentage (割合)"],
                idioms: ["on the left (左側に)"],
                synonyms: ["few", "various"],
                grammar: "複数名詞(prefectures)に合わせて'There are'を使用しています。"
            },
            {
                top: "65%", left: "73%", width: "25%", height: "30%", color: "#2ecc71",
                title: "Visual Aid",
                eng: "There is a realistic illustration of potatoes in the bottom right corner to visually represent the data topic.",
                jp: "データのトピックを視覚的に表すために、右下隅に本物のようなじゃがいものイラストがあります。",
                vocab: ["illustration (図解)", "realistic (現実的な)", "topic (主題)"],
                idioms: ["in the corner (隅に)"],
                synonyms: ["drawing", "image"],
                grammar: "場所を示す副詞句(in the bottom right corner)を伴う存在文です。"
            }
        ]
    }
);

// 2. Potato Production Share (82%)
window.galleryData.push(
    {
        imageFile: "114.webp",
        series: "100",
        spots: [
            {
                top: "60%", left: "50%", width: "25%", height: "20%", color: "#e67e22",
                title: "Updated Percentage",
                eng: "There is a slight increase in Hokkaido's share to eighty-two percent in this particular data set.",
                jp: "この特定のデータセットでは、北海道のシェアが82％へとわずかに増加しています。",
                vocab: ["slight (わずかな)", "increase (増加)", "particular (特定の)"],
                idioms: ["data set (データセット)"],
                synonyms: ["small", "minor"],
                grammar: "変化の存在(increase)を'There is'で表現しています。"
            },
            {
                top: "15%", left: "37%", width: "10%", height: "20%", color: "#95a5a6",
                title: "Others Category",
                eng: "There is a ten percent portion labeled as Others, representing the combined production of all other regions.",
                jp: "「その他」としてラベル付けされた10％の部分があり、他のすべての地域の合計生産量を表しています。",
                vocab: ["portion (部分)", "combined (合算された)", "region (地域)"],
                idioms: ["label as (〜として分類する)"],
                synonyms: ["part", "section"],
                grammar: "過去分詞(labeled)が直前の名詞(portion)を修飾しています。"
            },
            {
                top: "5%", left: "5%", width: "90%", height: "10%", color: "#34495e",
                title: "Chart Title",
                eng: "There is a bold title at the very top of the image that clearly identifies the chart's content.",
                jp: "画像の一番上には、チャートの内容を明確に特定する太字のタイトルがあります。",
                vocab: ["bold (太字の)", "identify (特定する)", "content (内容)"],
                idioms: ["at the very top (一番上に)"],
                synonyms: ["heading", "title"],
                grammar: "場所(at the very top)を強調した存在文です。"
            }
        ]
    }
);

// 3. Cabbage Production Share (Aichi 22%)
window.galleryData.push(
    {
        imageFile: "115.webp",
        series: "100",
        spots: [
            {
                top: "20%", left: "50%", width: "25%", height: "35%", color: "#27ae60",
                title: "Aichi Prefecture",
                eng: "There is a twenty-two percent share for Aichi, which is the largest slice among the named prefectures.",
                jp: "愛知には22％のシェアがあり、名前が挙がっている県の中では最大の区分です。",
                vocab: ["slice (区分/一切れ)", "among (〜の間で)", "named (名指しされた)"],
                idioms: ["largest share (最大シェア)"],
                synonyms: ["segment", "piece"],
                grammar: "非制限用法のwhichを用いて、存在するシェアについての追加情報を提供しています。"
            },
            {
                top: "600px", left: "400px", width: "150px", height: "150px", color: "#f1c40f",
                title: "Gunma and Chiba",
                eng: "There are significant contributions from Gunma and Chiba, which hold twenty-one and twelve percent respectively.",
                jp: "群馬と千葉からの大きな貢献があり、それぞれ21％と12％を占めています。",
                vocab: ["contribution (貢献)", "respectively (それぞれ)", "significant (重要な)"],
                idioms: ["hold a share (シェアを持つ)"],
                synonyms: ["input", "amount"],
                grammar: "二つの県からの貢献に言及しているため、複数形の'There are'を使用しています。"
            },
            {
                top: "10%", left: "25%", width: "40%", height: "80%", color: "#bdc3c7",
                title: "Diverse Production",
                eng: "There is a massive forty-five percent allocated to Others, indicating that cabbage production is highly diverse.",
                jp: "「その他」に45％という膨大な量が割り当てられており、キャベツ生産が非常に多様であることを示しています。",
                vocab: ["massive (巨大な)", "allocated (割り当てられた)", "diverse (多様な)"],
                idioms: ["highly likely (非常に〜だ)"],
                synonyms: ["huge", "various"],
                grammar: "分詞(indicating...)を用いて、存在するデータの意味を補足しています。"
            }
        ]
    }
);

// 4. Cabbage Production Share (Aichi 25%)
window.galleryData.push(
    {
        imageFile: "116.webp",
        series: "100",
        spots: [
            {
                top: "20%", left: "55%", width: "25%", height: "35%", color: "#2ecc71",
                title: "Aichi's Growth",
                eng: "There is a slightly larger share for Aichi at twenty-five percent compared to the previous data illustration.",
                jp: "前のデータ図解と比較して、愛知のシェアは25％とわずかに大きくなっています。",
                vocab: ["slightly (わずかに)", "compared to (〜と比較して)", "previous (前の)"],
                idioms: ["as a result (結果として)"],
                synonyms: ["somewhat", "a bit"],
                grammar: "比較表現(compared to)を使い、現在の数値の存在を説明しています。"
            },
            {
                top: "60%", left: "55%", width: "20%", height: "30%", color: "#27ae60",
                title: "Gunma's Decline",
                eng: "There is a small decrease for Gunma to twenty percent, yet it remains a key cabbage producer.",
                jp: "群馬は20％へとわずかに減少していますが、依然として主要なキャベツ生産地です。",
                vocab: ["decrease (減少)", "remain (〜のままである)", "key (主要な)"],
                idioms: ["remain a (〜であり続ける)"],
                synonyms: ["drop", "reduction"],
                grammar: "逆説の接続詞(yet)を使い、減少の存在と重要性を両立させています。"
            },
            {
                top: "70%", left: "75%", width: "25%", height: "25%", color: "#16a085",
                title: "Cabbage Graphic",
                eng: "There are some fresh cabbage graphics on the right side to help identify the vegetable being discussed.",
                jp: "議論されている野菜を特定しやすくするために、右側にはいくつかの新鮮なキャベツの図があります。",
                vocab: ["fresh (新鮮な)", "graphic (図/グラフィック)", "discuss (議論する)"],
                idioms: ["on the right side (右側に)"],
                synonyms: ["image", "picture"],
                grammar: "複数形の'There are'を用い、視覚要素の存在を述べています。"
            }
        ]
    }
);

// 5. Eggplant Production Share (A)
window.galleryData.push(
    {
        imageFile: "117.webp",
        series: "100",
        spots: [
            {
                top: "15%", left: "55%", width: "25%", height: "35%", color: "#8e44ad",
                title: "Kochi Leadership",
                eng: "There is a twenty-five percent share for Kochi, making it the top eggplant producer in this chart.",
                jp: "高知には25％のシェアがあり、このチャートでトップのなす生産地となっています。",
                vocab: ["leadership (主導権)", "top (最高の)", "chart (図表)"],
                idioms: ["make it (〜にする)"],
                synonyms: ["lead", "prime"],
                grammar: "分詞構文(making it...)を伴い、トップシェアの存在がもたらす結果を説明しています。"
            },
            {
                top: "650px", left: "750px", width: "200px", height: "150px", color: "#9b59b6",
                title: "Eggplant Visuals",
                eng: "There is an image of purple eggplants in the bottom right to represent the vegetable variety.",
                jp: "野菜の種類を表すために、右下に紫色のなすの画像があります。",
                vocab: ["purple (紫の)", "represent (表す)", "variety (種類)"],
                idioms: ["in the bottom (底部に)"],
                synonyms: ["type", "kind"],
                grammar: "特定の目的(to represent...)を持つ存在文です。"
            },
            {
                top: "10%", left: "25%", width: "45%", height: "80%", color: "#bdc3c7",
                title: "General Production",
                eng: "There is a large portion for 'Others' at forty-five percent, which is common in diverse agricultural data.",
                jp: "「その他」が45％という大きな割合を占めていますが、これは多様な農業データにおいて一般的です。",
                vocab: ["common (一般的な)", "diverse (多様な)", "agricultural (農業の)"],
                idioms: ["be common in (〜でよくある)"],
                synonyms: ["usual", "standard"],
                grammar: "関係代名詞whichを使い、その割合の存在が一般的であることを補足しています。"
            }
        ]
    }
);

// 6. Eggplant Production Share (B)
window.galleryData.push(
    {
        imageFile: "118.webp",
        series: "100",
        spots: [
            {
                top: "15%", left: "55%", width: "25%", height: "35%", color: "#2980b9",
                title: "Kochi's Increase",
                eng: "There is a higher share of twenty-seven percent for Kochi compared to the previous eggplant data.",
                jp: "前のなすのデータと比較して、高知のシェアは27％と高くなっています。",
                vocab: ["higher (より高い)", "compared to (〜と比べて)", "previous (前の)"],
                idioms: ["a share of (〜のシェア)"],
                synonyms: ["greater", "increased"],
                grammar: "比較級(higher)を用い、現在の数値の存在を際立たせています。"
            },
            {
                top: "55%", left: "55%", width: "25%", height: "35%", color: "#8e44ad",
                title: "Gunma's Position",
                eng: "There is a twenty-one percent share for Gunma, showing its importance in eggplant cultivation.",
                jp: "群馬には21％のシェアがあり、なす栽培における重要性を示しています。",
                vocab: ["importance (重要性)", "cultivation (栽培)", "position (位置)"],
                idioms: ["show its (〜を示す)"],
                synonyms: ["significance", "farming"],
                grammar: "分詞句(showing...)で、そのシェアの存在が持つ意味を説明しています。"
            },
            {
                top: "70%", left: "40%", width: "15%", height: "25%", color: "#9b59b6",
                title: "Chiba's Share",
                eng: "There is a steady ten percent for Chiba, which remains unchanged from the previous chart version.",
                jp: "千葉は安定した10％であり、前のチャートバージョンから変わっていません。",
                vocab: ["steady (安定した)", "unchanged (変わらない)", "version (版)"],
                idioms: ["remain unchanged (不変のままである)"],
                synonyms: ["constant", "stable"],
                grammar: "関係代名詞which節の中で状態の継続(remains)を述べています。"
            }
        ]
    }
);

// 7. Carrot Production Share (Hokkaido 28%)
window.galleryData.push(
    {
        imageFile: "119.webp",
        series: "100",
        spots: [
            {
                top: "15%", left: "50%", width: "30%", height: "40%", color: "#d35400",
                title: "Hokkaido Carrots",
                eng: "There is a twenty-eight percent share for Hokkaido, making it a primary source of carrots in Japan.",
                jp: "北海道には28％のシェアがあり、日本におけるにんじんの主要な供給源となっています。",
                vocab: ["primary (主要な)", "source (源)", "share (分担)"],
                idioms: ["primary source (主な情報源/供給源)"],
                synonyms: ["main", "major"],
                grammar: "結果を表す分詞構文(making it...)を伴う存在文です。"
            },
            {
                top: "70%", left: "40%", width: "15%", height: "25%", color: "#e67e22",
                title: "Chiba's Lower Share",
                eng: "There is a ten percent portion for Chiba on the bottom, which is slightly lower than its other sector.",
                jp: "下部には千葉の10％の部分があり、もう一つのセクターよりもわずかに低くなっています。",
                vocab: ["portion (部分)", "slightly (わずかに)", "sector (部門)"],
                idioms: ["on the bottom (下部に)"],
                synonyms: ["section", "part"],
                grammar: "場所(on the bottom)と付加情報(which...)を組み合わせた文です。"
            },
            {
                top: "70%", left: "75%", width: "25%", height: "25%", color: "#d35400",
                title: "Carrot Illustration",
                eng: "There are three bright orange carrots in the corner to help people identify the chart's topic instantly.",
                jp: "チャートのトピックを即座に識別できるように、隅に3本の明るいオレンジ色のにんじんがあります。",
                vocab: ["bright (明るい)", "instantly (即座に)", "identify (識別する)"],
                idioms: ["in the corner (隅に)"],
                synonyms: ["vivid", "immediately"],
                grammar: "複数名詞(carrots)を導く'There are'構文です。"
            }
        ]
    }
);

// 8. Carrot Production Share (Detailed)
window.galleryData.push(
    {
        imageFile: "120.webp",
        series: "100",
        spots: [
            {
                top: "10%", left: "5%", width: "30%", height: "80%", color: "#27ae60",
                title: "Specific Regions",
                eng: "There are several specific regions listed like Tokushima and Kagoshima, each contributing around fifteen percent.",
                jp: "徳島や鹿児島のように、それぞれ約15％貢献しているいくつかの特定の地域がリストされています。",
                vocab: ["specific (特定の)", "contribute (貢献する)", "around (〜の周りに/約)"],
                idioms: ["around fifteen percent (約15％)"],
                synonyms: ["particular", "various"],
                grammar: "'There are + 複数名詞'の後に過去分詞(listed)が続いています。"
            },
            {
                top: "20%", left: "35%", width: "15%", height: "15%", color: "#16a085",
                title: "Others Detail",
                eng: "There is a fifty percent share for Others at the top, representing many smaller production areas across Japan.",
                jp: "上部には「その他」の50％のシェアがあり、日本中の多くのより小さな生産地域を表しています。",
                vocab: ["detail (詳細)", "across (〜を横切って/〜中に)", "production (生産)"],
                idioms: ["across Japan (日本中で)"],
                synonyms: ["representation", "portion"],
                grammar: "現在分詞(representing...)を用いて、シェアの存在意義を説明しています。"
            },
            {
                top: "15%", left: "50%", width: "30%", height: "35%", color: "#e67e22",
                title: "Hokkaido's Share",
                eng: "There is a twenty-seven percent slice for Hokkaido, which is a major part of the right side of the chart.",
                jp: "北海道には27％の区分があり、チャートの右側の主要な部分を占めています。",
                vocab: ["slice (区分)", "major (主要な)", "chart (図表)"],
                idioms: ["on the right side (右側に)"],
                synonyms: ["segment", "part"],
                grammar: "関係代名詞which節を使って、存在する部分の場所を補足しています。"
            }
        ]
    }
);

// 9. Okra Production Share (Kagoshima 27%)
window.galleryData.push(
    {
        imageFile: "121.webp",
        series: "100",
        spots: [
            {
                top: "15%", left: "50%", width: "35%", height: "40%", color: "#2ecc71",
                title: "Kagoshima Okra",
                eng: "There is a twenty-seven percent share for Kagoshima, identifying it as the leading prefecture for okra.",
                jp: "鹿児島には27％のシェアがあり、オクラの主要な県として特定されています。",
                vocab: ["leading (主要な)", "prefecture (県)", "identifying (特定している)"],
                idioms: ["leading prefecture (主要な県)"],
                synonyms: ["main", "top"],
                grammar: "分詞構文(identifying...)を使い、存在するシェアの役割を述べています。"
            },
            {
                top: "55%", left: "55%", width: "25%", height: "35%", color: "#27ae60",
                title: "Kochi Share",
                eng: "There is a thirteen percent portion for Kochi, which is nearly half of Kagoshima's production share.",
                jp: "高知には13％の部分があり、これは鹿児島の生産シェアのほぼ半分です。",
                vocab: ["nearly (ほぼ)", "half (半分)", "portion (部分)"],
                idioms: ["half of (〜の半分)"],
                synonyms: ["almost", "section"],
                grammar: "関係代名詞whichを使って、存在する数値の相対的な大きさを比較しています。"
            },
            {
                top: "700px", left: "750px", width: "200px", height: "150px", color: "#16a085",
                title: "Okra Graphics",
                eng: "There are detailed graphics of okra on the bottom right, including a cross-section showing its star shape.",
                jp: "右下にはオクラの詳細なグラフィックがあり、星型を示す断面図も含まれています。",
                vocab: ["detailed (詳細な)", "cross-section (断面)", "shape (形)"],
                idioms: ["star shape (星型)"],
                synonyms: ["diagram", "illustration"],
                grammar: "複数形の'There are'を用い、図解の中にある具体的な要素(graphics)を説明しています。"
            }
        ]
    }
);

// 10. Okra Production Share (Kagoshima 28%)
window.galleryData.push(
    {
        imageFile: "122.webp",
        series: "100",
        spots: [
            {
                top: "15%", left: "50%", width: "35%", height: "40%", color: "#27ae60",
                title: "Increased Kagoshima",
                eng: "There is a twenty-eight percent share for Kagoshima here, which is a one percent increase from the previous data.",
                jp: "ここでは鹿児島が28％のシェアを占めており、前のデータから1％増加しています。",
                vocab: ["increase (増加)", "previous (前の)", "share (シェア)"],
                idioms: ["one percent increase (1％の増加)"],
                synonyms: ["rise", "growth"],
                grammar: "関係代名詞whichを用いて、現在のシェアの存在が過去とどう違うかを説明しています。"
            },
            {
                top: "70%", left: "45%", width: "15%", height: "25%", color: "#a2d149",
                title: "Kochi's Ten Percent",
                eng: "There is a ten percent portion for Kochi shown at the bottom, contributing significantly to the total production.",
                jp: "下部には高知の10％の部分が示されており、総生産量に大きく貢献しています。",
                vocab: ["significantly (大きく/著しく)", "total (合計の)", "shown (示された)"],
                idioms: ["contribute to (〜に貢献する)"],
                synonyms: ["greatly", "entire"],
                grammar: "過去分詞(shown)と現在分詞(contributing)の両方を使い、存在するデータの状態を詳しく述べています。"
            },
            {
                top: "20%", left: "25%", width: "40%", height: "80%", color: "#d4ef68",
                title: "Others Category",
                eng: "There is a forty-three percent share for 'Others', which covers many different production regions in Japan.",
                jp: "「その他」には43％のシェアがあり、日本の多くの異なる生産地域をカバーしています。",
                vocab: ["covers (カバーする/覆う)", "different (異なる)", "region (地域)"],
                idioms: ["cover many regions (多くの地域を網羅する)"],
                synonyms: ["includes", "various"],
                grammar: "関係代名詞which節の中で動詞(covers)を使い、存在するカテゴリの範囲を説明しています。"
            }
        ]
    }
);
// 1. Daikon Radish Production Share (A)
window.galleryData.push(
    {
        imageFile: "123.webp",
        series: "100",
        spots: [
            {
                top: "15%", left: "55%", width: "25%", height: "35%", color: "#2ecc71",
                title: "Hokkaido's Share",
                eng: "There is a twenty-two percent share for Hokkaido, making it the leading producer of daikon radish in this dataset.",
                jp: "北海道には22％のシェアがあり、このデータセットにおいてだいこんの主要な生産地となっています。",
                vocab: ["leading (主要な)", "dataset (データセット)", "radish (大根)"],
                idioms: ["leading producer (主要な生産者)"],
                synonyms: ["main", "top"],
                grammar: "分詞構文(making it...)を用いて、存在するシェアがもたらす結果を説明しています。"
            },
            {
                top: "55%", left: "55%", width: "25%", height: "35%", color: "#27ae60",
                title: "Aomori Production",
                eng: "There is a twenty-one percent portion for Aomori, which is almost equal to Hokkaido's production level.",
                jp: "青森には21％の部分があり、これは北海道の生産レベルとほぼ同等です。",
                vocab: ["portion (部分)", "equal (等しい)", "level (水準)"],
                idioms: ["almost equal to (〜とほぼ等しい)"],
                synonyms: ["segment", "section"],
                grammar: "関係代名詞whichを使い、存在する数値の比較情報を追加しています。"
            },
            {
                top: "70%", left: "75%", width: "25%", height: "25%", color: "#16a085",
                title: "Daikon Illustration",
                eng: "There are several fresh daikon radishes illustrated in the bottom right to help identify the crop visually.",
                jp: "作物を視覚的に識別しやすくするために、右下に数本の手書きのだいこんが描かれています。",
                vocab: ["illustrated (描かれた)", "crop (作物)", "visually (視覚的に)"],
                idioms: ["in the bottom right (右下に)"],
                synonyms: ["drawing", "graphic"],
                grammar: "複数形(radishes)に合わせて'There are'を使用し、存在を述べています。"
            }
        ]
    }
);

// 2. Daikon Radish Production Share (B)
window.galleryData.push(
    {
        imageFile: "124.webp",
        series: "100",
        spots: [
            {
                top: "15%", left: "55%", width: "25%", height: "35%", color: "#3498db",
                title: "Increased Hokkaido Share",
                eng: "There is a twenty-five percent share for Hokkaido here, indicating a slight increase from the previous version.",
                jp: "ここでの北海道のシェアは25％であり、前のバージョンからのわずかな増加を示しています。",
                vocab: ["increase (増加)", "slight (わずかな)", "version (版)"],
                idioms: ["slight increase (わずかな増加)"],
                synonyms: ["rise", "growth"],
                grammar: "現在分詞(indicating...)を使い、存在するデータの変化を説明しています。"
            },
            {
                top: "55%", left: "55%", width: "25%", height: "35%", color: "#2ecc71",
                title: "Chiba's Twenty Percent",
                eng: "There is a twenty percent portion for Chiba in the middle section, showing its significant role in production.",
                jp: "中間セクションには千葉の20％の部分があり、生産におけるその重要な役割を示しています。",
                vocab: ["significant (重要な)", "role (役割)", "middle (真ん中の)"],
                idioms: ["significant role (重要な役割)"],
                synonyms: ["important", "major"],
                grammar: "場所(in the middle section)を明示した存在文です。"
            },
            {
                top: "70%", left: "45%", width: "15%", height: "25%", color: "#bdc3c7",
                title: "Smallest Named Share",
                eng: "There is a ten percent slice for Chiba at the bottom, which is the smallest specific share listed.",
                jp: "下部には千葉の10％の区分があり、これは記載されている特定のシェアの中で最小です。",
                vocab: ["slice (区分)", "smallest (最小の)", "listed (記載された)"],
                idioms: ["at the bottom (下部に)"],
                synonyms: ["minimum", "least"],
                grammar: "最上級(smallest)を含む関係節で、存在するデータの特筆すべき点を述べています。"
            }
        ]
    }
);

// 3. Spinach Production Share (A)
window.galleryData.push(
    {
        imageFile: "125.webp",
        series: "100",
        spots: [
            {
                top: "10%", left: "55%", width: "30%", height: "45%", color: "#1b4332",
                title: "Gunma Leadership",
                eng: "There is a twenty-five percent share for Gunma, identifying it as a major spinach-producing region.",
                jp: "群馬には25％のシェアがあり、主要なほうれん草生産地域として特定されています。",
                vocab: ["leadership (主導権)", "major (主要な)", "region (地域)"],
                idioms: ["identifying as (〜として特定する)"],
                synonyms: ["top", "prime"],
                grammar: "分詞構文(identifying...)を使い、シェアの存在が持つ意味を解説しています。"
            },
            {
                top: "55%", left: "55%", width: "30%", height: "40%", color: "#2d6a4f",
                title: "Saitama's Contribution",
                eng: "There is a twenty-four percent portion for Saitama, which is nearly as large as Gunma's share.",
                jp: "埼玉には24％の部分があり、これは群馬のシェアとほぼ同じ大きさです。",
                vocab: ["contribution (貢献)", "nearly (ほぼ)", "large (大きい)"],
                idioms: ["nearly as large as (〜とほぼ同じ大きさ)"],
                synonyms: ["almost", "portion"],
                grammar: "比較構造(nearly as large as)を含む関係節で存在を補足しています。"
            },
            {
                top: "60%", left: "75%", width: "25%", height: "35%", color: "#40916c",
                title: "Spinach Graphic",
                eng: "There are some fresh green spinach leaves shown on the right to visually represent the subject.",
                jp: "主題を視覚的に表すために、右側には新鮮な緑のほうれん草の葉がいくつか示されています。",
                vocab: ["fresh (新鮮な)", "leaves (葉)", "represent (表す)"],
                idioms: ["on the right (右側に)"],
                synonyms: ["image", "graphic"],
                grammar: "複数名詞(leaves)を導く'There are'の構文です。"
            }
        ]
    }
);

// 4. Spinach Production Share (B)
window.galleryData.push(
    {
        imageFile: "126.webp",
        series: "100",
        spots: [
            {
                top: "55%", left: "55%", width: "30%", height: "40%", color: "#52b788",
                title: "Ibaraki's Twenty-One",
                eng: "There is a twenty-one percent share for Ibaraki, which is a new specific entry compared to the previous chart.",
                jp: "茨城には21％のシェアがあり、これは前のチャートと比較して新しい特定の項目です。",
                vocab: ["entry (項目/登録)", "compared to (〜と比べて)", "previous (前の)"],
                idioms: ["compared to (〜と比較して)"],
                synonyms: ["new", "additional"],
                grammar: "関係代名詞whichを使い、存在するデータの新規性を説明しています。"
            },
            {
                top: "10%", left: "25%", width: "45%", height: "85%", color: "#74c69d",
                title: "Others Category",
                eng: "There is a forty-five percent portion for Others, indicating that spinach is grown in many different prefectures.",
                jp: "「その他」に45％の割合があり、ほうれん草が多くの異なる都道府県で栽培されていることを示しています。",
                vocab: ["portion (割合)", "indicating (示している)", "different (異なる)"],
                idioms: ["grown in (〜で栽培される)"],
                synonyms: ["others", "miscellaneous"],
                grammar: "現在分詞(indicating...)を使い、広い存在範囲の意味を説明しています。"
            },
            {
                top: "5%", left: "5%", width: "90%", height: "10%", color: "#1b4332",
                title: "Chart Header",
                eng: "There is a clear title at the top of the image specifying the spinach production data for Japan.",
                jp: "画像の上部には、日本のほうれん草生産データを特定する明確なタイトルがあります。",
                vocab: ["clear (明確な)", "specifying (特定している)", "production (生産)"],
                idioms: ["at the top of (〜の上部に)"],
                synonyms: ["heading", "title"],
                grammar: "場所(at the top of...)と内容(specifying...)を組み合わせた存在文です。"
            }
        ]
    }
);

// 5. Onion Production Share (A)
window.galleryData.push(
    {
        imageFile: "127.webp",
        series: "100",
        spots: [
            {
                top: "10%", left: "50%", width: "35%", height: "45%", color: "#873e23",
                title: "Hokkaido Onions",
                eng: "There is a twenty-five percent share for Hokkaido, which is the leading region in this onion production chart.",
                jp: "北海道には25％のシェアがあり、このたまねぎ生産チャートにおける主要な地域です。",
                vocab: ["leading (主要な)", "region (地域)", "chart (図表)"],
                idioms: ["leading region (主要な地域)"],
                synonyms: ["top", "main"],
                grammar: "関係代名詞whichを使い、存在する地域の重要性を補足しています。"
            },
            {
                top: "55%", left: "50%", width: "35%", height: "40%", color: "#ca6f1e",
                title: "Saga's Share",
                eng: "There is a twenty-four percent portion for Saga, which is almost identical to the share of Hokkaido.",
                jp: "佐賀には24％の部分があり、これは北海道のシェアとほぼ同一です。",
                vocab: ["portion (部分)", "identical (同一の)", "almost (ほぼ)"],
                idioms: ["identical to (〜と同一の)"],
                synonyms: ["same", "equal"],
                grammar: "形容詞句(identical to...)を含む関係節で存在を詳しく述べています。"
            },
            {
                top: "60%", left: "75%", width: "25%", height: "35%", color: "#e67e22",
                title: "Onion Visuals",
                eng: "There are three brown onions illustrated on the right, including one that is sliced in half.",
                jp: "右側には3つの茶色のたまねぎが描かれており、そのうちの1つは半分に切られています。",
                vocab: ["illustrated (描かれた)", "sliced (切られた)", "half (半分)"],
                idioms: ["in half (半分に)"],
                synonyms: ["drawing", "image"],
                grammar: "数量(three)を伴う'There are'構文で、視覚要素の存在を説明しています。"
            }
        ]
    }
);

// 6. Onion Production Share (B)
window.galleryData.push(
    {
        imageFile: "128.webp",
        series: "100",
        spots: [
            {
                top: "10%", left: "50%", width: "35%", height: "45%", color: "#6e2c00",
                title: "Hokkaido's Twenty-Three",
                eng: "There is a twenty-three percent share for Hokkaido here, reflecting a two percent decrease from the previous version.",
                jp: "ここでの北海道のシェアは23％であり、前のバージョンから2％の減少を反映しています。",
                vocab: ["reflecting (反映している)", "decrease (減少)", "previous (前の)"],
                idioms: ["two percent decrease (2％の減少)"],
                synonyms: ["fall", "drop"],
                grammar: "現在分詞(reflecting...)を使い、存在するデータの推移を説明しています。"
            },
            {
                top: "75%", left: "45%", width: "15%", height: "20%", color: "#d35400",
                title: "Hyogo Prefecture",
                eng: "There is a twelve percent portion for Hyogo at the bottom, contributing a steady amount to the national total.",
                jp: "下部には兵庫の12％の部分があり、全国合計に対して安定した量を貢献しています。",
                vocab: ["steady (安定した)", "national (全国の)", "total (合計)"],
                idioms: ["contribute to (〜に貢献する)"],
                synonyms: ["stable", "constant"],
                grammar: "分詞構文(contributing...)を使い、存在する割合の役割を述べています。"
            },
            {
                top: "20%", left: "25%", width: "45%", height: "80%", color: "#f5c06a",
                title: "Large Others Category",
                eng: "There is a massive forty-five percent allocated to Others, which is the largest single category on this chart.",
                jp: "「その他」に45％という膨大な量が割り当てられており、このチャートで最大の単一カテゴリとなっています。",
                vocab: ["massive (膨大な)", "allocated (割り当てられた)", "category (カテゴリ)"],
                idioms: ["single category (単一のカテゴリ)"],
                synonyms: ["huge", "largest"],
                grammar: "過去分詞(allocated)と関係代名詞whichを組み合わせた存在文です。"
            }
        ]
    }
);
