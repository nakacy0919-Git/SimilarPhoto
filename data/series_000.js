// ============================================
// Series 000 Data (001 - 006)
// ============================================

// データの受け皿が存在するか確認し、なければ作成
window.galleryData = window.galleryData || [];

// 配列にデータを追加
window.galleryData.push(
    {
        imageFile: "001.png",
        spots: [
            {
                top: "36%", left: "36%", width: "28%", height: "28%", color: "#3498db",
                title: "Center: A Pair of Penguins",
                eng: "Two penguins are standing side by side in the central cubby.",
                jp: "中央の小部屋に2羽のペンギンが並んで立っています。",
                vocab: ["cubby (棚の区画)", "side by side (並んで)", "central (中央の)"],
                idioms: ["stick together (一緒にいる)"],
                synonyms: ["duo (pair)"],
                grammar: "位置を表す前置詞 'in' と、状態を表す現在進行形 'are standing' の組み合わせです。"
            },
            {
                top: "69%", left: "3%", width: "28%", height: "28%", color: "#e67e22",
                title: "Bottom-Left: A Solitary Rabbit",
                eng: "A brown rabbit sits alone in the bottom-left section.",
                jp: "茶色のウサギが左下の区画に一匹で座っています。",
                vocab: ["solitary (単独の)", "section (区画)", "bottom-left (左下)"],
                idioms: ["lone wolf (一匹狼)"],
                synonyms: ["alone (solitary)"],
                grammar: "場所を指す副詞句 'in the bottom-left section' が文末に来ています。"
            }
        ]
    },
    {
        imageFile: "002.png",
        spots: [
            {
                top: "36%", left: "3%", width: "28%", height: "28%", color: "#95a5a6",
                title: "Left: A Koala",
                eng: "A grey koala is sitting to the left of the penguins.",
                jp: "灰色のコアラがペンギンの左側に座っています。",
                vocab: ["to the left of (～の左側に)", "grey (灰色の)"],
                idioms: ["sit tight (じっとしている)"],
                synonyms: ["beside (next to)"],
                grammar: "相対的な位置関係を示す 'to the left of' がポイントです。"
            },
            {
                top: "36%", left: "36%", width: "28%", height: "28%", color: "#3498db",
                title: "Center: Sandwiched Penguins",
                eng: "The penguin pair is sandwiched between the koala and the dog.",
                jp: "ペンギンのペアは、コアラと犬の間に挟まれています。",
                vocab: ["sandwiched (挟まれた)", "between (～の間)"],
                idioms: ["caught in the middle (板挟みになる)"],
                synonyms: ["surrounded (enclosed)"],
                grammar: "受動態 'is sandwiched' を使い、挟まれている状態を強調しています。"
            },
            {
                top: "36%", left: "69%", width: "28%", height: "28%", color: "#f1c40f",
                title: "Right: A Golden Retriever",
                eng: "A happy-looking dog sits on the far right side of the middle row.",
                jp: "幸せそうな犬が、中段の右端に座っています。",
                vocab: ["middle row (中段)", "far right (右端)"],
                idioms: ["man's best friend (犬)"],
                synonyms: ["canine (dog)"],
                grammar: "複合形容詞 'happy-looking' が名詞 dog を修飾しています。"
            }
        ]
    },
    {
        imageFile: "003.png",
        spots: [
            {
                top: "3%", left: "3%", width: "28%", height: "28%", color: "#e67e22",
                title: "Top-Left: An Orange Tabby",
                eng: "An orange tabby cat is sitting in the top-left compartment.",
                jp: "オレンジ色のトラ猫が左上の区画に座っています。",
                vocab: ["tabby (トラ猫)", "compartment (仕切り)"],
                idioms: ["cat nap (うたた寝)"],
                synonyms: ["feline (cat)"],
                grammar: "場所を特定する 'top-left' という表現です。"
            },
            {
                top: "3%", left: "36%", width: "28%", height: "28%", color: "#2c3e50",
                title: "Top-Center: A Zebra",
                eng: "A zebra stands next to the cat in the top row.",
                jp: "最上段で、シマウマが猫の隣に立っています。",
                vocab: ["top row (最上段)", "next to (～の隣に)"],
                idioms: ["change one's stripes (性根を変える)"],
                synonyms: ["adjacent (next to)"],
                grammar: "動詞 'stands' と場所 'next to' の組み合わせ。"
            },
            {
                top: "69%", left: "69%", width: "28%", height: "28%", color: "#e74c3c",
                title: "Bottom-Right: Diagonal Position",
                eng: "The rabbit is placed in the bottom-right corner, far away from the others.",
                jp: "ウサギは右下の隅に配置され、他の動物からは離れています。",
                vocab: ["corner (隅)", "far away (遠く離れて)"],
                idioms: ["miles away (心ここにあらず)"],
                synonyms: ["distant (far)"],
                grammar: "受動態 'is placed' が使われています。"
            }
        ]
    },
    {
        imageFile: "004.png",
        spots: [
            {
                top: "3%", left: "3%", width: "28%", height: "28%", color: "#2c3e50",
                title: "Start: Top-Left",
                eng: "The zebra starts the diagonal line from the top-left corner.",
                jp: "シマウマが左上の隅から斜めのラインを始めています。",
                vocab: ["diagonal (斜めの)", "line (線)"],
                idioms: ["start off (始める)"],
                synonyms: ["begin (start)"],
                grammar: "能動態の 'starts' を使い、シマウマが列の始点であることを示しています。"
            },
            {
                top: "36%", left: "36%", width: "28%", height: "28%", color: "#e67e22",
                title: "Middle: Center Spot",
                eng: "The cat occupies the exact center of the grid.",
                jp: "猫がグリッドのちょうど中心を占めています。",
                vocab: ["occupy (占める)", "exact (正確な)", "grid (格子)"],
                idioms: ["dead center (ど真ん中)"],
                synonyms: ["inhabit (occupy)"],
                grammar: "動詞 'occupy' は空間や地位を占める際によく使われます。"
            },
            {
                top: "69%", left: "69%", width: "28%", height: "28%", color: "#e74c3c",
                title: "End: Bottom-Right",
                eng: "The rabbit completes the diagonal alignment in the bottom-right.",
                jp: "ウサギが右下で斜めの配置を完成させています。",
                vocab: ["complete (完成させる)", "alignment (整列)"],
                idioms: ["tie up loose ends (仕上げる)"],
                synonyms: ["finish (complete)"],
                grammar: "主語(Rabbit) + 動詞(completes) + 目的語(alignment) です。"
            }
        ]
    },
    {
        imageFile: "005.png",
        spots: [
            {
                top: "20%", left: "5%", width: "30%", height: "60%", color: "#c0392b",
                title: "Two Bottles of Cola",
                eng: "There are two identical bottles of zero-sugar cola on the left.",
                jp: "左側に、ゼロシュガーコーラの全く同じボトルが2本あります。",
                vocab: ["identical (全く同じ)", "zero-sugar (無糖)"],
                idioms: ["seeing double (二重に見える)"],
                synonyms: ["duplicate (copy)"],
                grammar: "存在を表す 'There are' 構文です。"
            },
            {
                top: "20%", left: "37%", width: "30%", height: "60%", color: "#27ae60",
                title: "Tea Selection",
                eng: "In the middle, we see a variety of teas: citrus green tea and milk tea.",
                jp: "中央には、シークヮーサー緑茶やミルクティーなど、様々な紅茶が見られます。",
                vocab: ["variety (種類)", "citrus (柑橘類)"],
                idioms: ["cup of tea (好み)"],
                synonyms: ["assortment (variety)"],
                grammar: "名詞の列挙（A and B）を使っています。"
            },
            {
                top: "20%", left: "68%", width: "30%", height: "60%", color: "#2c3e50",
                title: "Black Coffee",
                eng: "Two bottles of black coffee are lined up on the right side.",
                jp: "右側にはブラックコーヒーのボトルが2本並んでいます。",
                vocab: ["line up (並ぶ)", "black coffee (ブラック)"],
                idioms: ["wake up call (警鐘/目覚め)"],
                synonyms: ["align (line up)"],
                grammar: "受動態 'are lined up' で「並べられている」状態を表します。"
            }
        ]
    },
    {
        imageFile: "006.png",
        spots: [
            {
                top: "10%", left: "20%", width: "15%", height: "60%", color: "#3498db",
                title: "Sports Drink",
                eng: "The blue bottle is a sports drink, designed for hydration.",
                jp: "青いボトルはスポーツドリンクで、水分補給のために作られています。",
                vocab: ["hydration (水分補給)", "design (設計する)"],
                idioms: ["quench one's thirst (渇きを癒やす)"],
                synonyms: ["beverage (drink)"],
                grammar: "過去分詞 'designed' が形容詞的に修飾しています。"
            },
            {
                top: "25%", left: "75%", width: "15%", height: "50%", color: "#f1c40f",
                title: "Energy Drink",
                eng: "The small red and yellow can on the far right is an energy drink.",
                jp: "右端にある赤と黄色の小さな缶はエナジードリンクです。",
                vocab: ["energy drink (エナジードリンク)", "can (缶)"],
                idioms: ["boost of energy (元気が出る)"],
                synonyms: ["stimulant (energy booster)"],
                grammar: "長い主語 'The...can' に対する動詞 'is' です。"
            },
            {
                top: "75%", left: "5%", width: "90%", height: "15%", color: "#2ecc71",
                title: "Price Tags",
                eng: "The prices range from 140 yen to 180 yen.",
                jp: "価格は140円から180円の範囲です。",
                vocab: ["range (範囲に及ぶ)", "price tag (値札)"],
                idioms: ["bang for your buck (コスパが良い)"],
                synonyms: ["cost (price)"],
                grammar: "動詞 'range' を使い、'from A to B' で範囲を示しています。"
            }
        ]
    },
    {
        imageFile: "007.png",
        spots: [
            {
                top: "20%", left: "8%", width: "14%", height: "50%", color: "#2ecc71",
                title: "Green Tea Bottle",
                eng: "A bottle of authentic green tea sits on the far left, promising a rich and savory flavor.",
                jp: "本格的な緑茶のボトルが左端にあり、豊かで旨みのある味わいを約束しています。",
                vocab: ["authentic (本格的な)", "savory (旨みのある)", "promise (予感させる)"],
                idioms: ["turn over a new leaf (心機一転する)"],
                synonyms: ["genuine (authentic)"],
                grammar: "現在分詞構文 'promising...' が、ボトルの見た目がもたらす期待感を説明しています。"
            },
            {
                top: "20%", left: "37%", width: "14%", height: "50%", color: "#9b59b6",
                title: "Royal Milk Tea",
                eng: "The royal milk tea features a blue and white label, suggesting a creamy and elegant taste.",
                jp: "ロイヤルミルクティーは青と白のラベルが特徴で、クリーミーで上品な味を連想させます。",
                vocab: ["feature (特徴とする)", "elegant (上品な)", "suggest (示唆する)"],
                idioms: ["cream of the crop (最高傑作)"],
                synonyms: ["luxurious (elegant)"],
                grammar: "動詞 'features' と現在分詞 'suggesting' を組み合わせた表現です。"
            },
            {
                top: "32%", left: "80%", width: "12%", height: "35%", color: "#f1c40f",
                title: "Golden Can Coffee",
                eng: "A small golden can of sweetened coffee is located on the far right, priced the lowest at 120 yen.",
                jp: "右端には微糖コーヒーの小さな金の缶があり、120円という最も安い価格設定になっています。",
                vocab: ["sweetened (加糖の)", "priced (価格設定された)", "lowest (最も低い)"],
                idioms: ["good things come in small packages (良品は小型)"],
                synonyms: ["sugary (sweetened)"],
                grammar: "過去分詞 'priced' が主語の状態を補足説明しています。"
            }
        ]
    }
);
