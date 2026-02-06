// ═══════════════════════════════════════════════════════════════
//                    DATABASE TỪ VỰNG TIẾNG NHẬT
// ═══════════════════════════════════════════════════════════════
// Hướng dẫn: Thêm từ mới theo cấu trúc:
// { kanji: "漢字", kana: "かな", mean: "Nghĩa tiếng Việt", example: "Ví dụ câu" }

const database = {
    // ───────────────────────────────────────────────────────────
    // CẤP ĐỘ N5 (Sơ cấp)
    // ───────────────────────────────────────────────────────────
    n5: [
        { kanji: "私", kana: "わたし", mean: "Tôi", example: "私は学生です。(Tôi là học sinh)" },
        { kanji: "貴方", kana: "あなた", mean: "Bạn", example: "あなたの名前は？(Tên bạn là gì?)" },
        { kanji: "彼", kana: "かれ", mean: "Anh ấy", example: "彼は日本人です。(Anh ấy là người Nhật)" },
        { kanji: "彼女", kana: "かのじょ", mean: "Cô ấy", example: "彼女は先生です。(Cô ấy là giáo viên)" },
        { kanji: "学校", kana: "がっこう", mean: "Trường học", example: "学校へ行く。(Đi đến trường)" },
        { kanji: "先生", kana: "せんせい", mean: "Giáo viên", example: "田中先生。(Thầy Tanaka)" },
        { kanji: "本", kana: "ほん", mean: "Sách", example: "本を読む。(Đọc sách)" },
        { kanji: "水", kana: "みず", mean: "Nước", example: "水を飲む。(Uống nước)" },
        { kanji: "食べる", kana: "たべる", mean: "Ăn", example: "りんごを食べる。(Ăn táo)" },
        { kanji: "飲む", kana: "のむ", mean: "Uống", example: "コーヒーを飲む。(Uống cà phê)" },
        { kanji: "見る", kana: "みる", mean: "Nhìn, xem", example: "テレビを見る。(Xem TV)" },
        { kanji: "聞く", kana: "きく", mean: "Nghe", example: "音楽を聞く。(Nghe nhạc)" },
        { kanji: "話す", kana: "はなす", mean: "Nói", example: "日本語を話す。(Nói tiếng Nhật)" },
        { kanji: "行く", kana: "いく", mean: "Đi", example: "東京へ行く。(Đi Tokyo)" },
        { kanji: "来る", kana: "くる", mean: "Đến", example: "友達が来る。(Bạn đến)" },
        { kanji: "大きい", kana: "おおきい", mean: "To, lớn", example: "大きい犬。(Con chó to)" },
        { kanji: "小さい", kana: "ちいさい", mean: "Nhỏ", example: "小さい猫。(Con mèo nhỏ)" },
        { kanji: "新しい", kana: "あたらしい", mean: "Mới", example: "新しい車。(Xe mới)" },
        { kanji: "古い", kana: "ふるい", mean: "Cũ", example: "古い家。(Nhà cũ)" },
        { kanji: "高い", kana: "たかい", mean: "Cao, đắt", example: "高い山。(Núi cao)" },
        { kanji: "安い", kana: "やすい", mean: "Rẻ", example: "安い店。(Cửa hàng rẻ)" },
        { kanji: "良い", kana: "いい/よい", mean: "Tốt", example: "いい天気。(Thời tiết tốt)" },
        { kanji: "悪い", kana: "わるい", mean: "Xấu, tệ", example: "悪い人。(Người xấu)" },
        { kanji: "多い", kana: "おおい", mean: "Nhiều", example: "人が多い。(Người nhiều)" },
        { kanji: "少ない", kana: "すくない", mean: "Ít", example: "お金が少ない。(Tiền ít)" },
        { kanji: "白い", kana: "しろい", mean: "Trắng", example: "白い雪。(Tuyết trắng)" },
        { kanji: "黒い", kana: "くろい", mean: "Đen", example: "黒い猫。(Mèo đen)" },
        { kanji: "赤い", kana: "あかい", mean: "Đỏ", example: "赤いりんご。(Táo đỏ)" },
        { kanji: "青い", kana: "あおい", mean: "Xanh", example: "青い空。(Bầu trời xanh)" },
        { kanji: "今日", kana: "きょう", mean: "Hôm nay", example: "今日は月曜日。(Hôm nay là thứ hai)" },
    ],

    // ───────────────────────────────────────────────────────────
    // CẤP ĐỘ N4 (Trung cấp sơ)
    // ───────────────────────────────────────────────────────────
    n4: [
        { kanji: "天気", kana: "てんき", mean: "Thời tiết", example: "今日の天気はいいです。(Thời tiết hôm nay tốt)" },
        { kanji: "季節", kana: "きせつ", mean: "Mùa", example: "春は暖かい季節です。(Mùa xuân là mùa ấm áp)" },
        { kanji: "経験", kana: "けいけん", mean: "Kinh nghiệm", example: "経験がある。(Có kinh nghiệm)" },
        { kanji: "意見", kana: "いけん", mean: "Ý kiến", example: "意見を言う。(Nói ý kiến)" },
        { kanji: "計画", kana: "けいかく", mean: "Kế hoạch", example: "旅行の計画。(Kế hoạch du lịch)" },
        { kanji: "準備", kana: "じゅんび", mean: "Chuẩn bị", example: "準備ができた。(Đã chuẩn bị xong)" },
        { kanji: "練習", kana: "れんしゅう", mean: "Luyện tập", example: "毎日練習する。(Luyện tập mỗi ngày)" },
        { kanji: "試験", kana: "しけん", mean: "Kỳ thi", example: "試験を受ける。(Thi)" },
        { kanji: "成績", kana: "せいせき", mean: "Thành tích", example: "成績がいい。(Thành tích tốt)" },
        { kanji: "合格", kana: "ごうかく", mean: "Đỗ, đạt", example: "試験に合格する。(Đỗ kỳ thi)" },
        { kanji: "失敗", kana: "しっぱい", mean: "Thất bại", example: "失敗した。(Đã thất bại)" },
        { kanji: "成功", kana: "せいこう", mean: "Thành công", example: "成功しました。(Đã thành công)" },
        { kanji: "努力", kana: "どりょく", mean: "Nỗ lực", example: "努力する。(Nỗ lực)" },
        { kanji: "予定", kana: "よてい", mean: "Dự định", example: "明日の予定。(Dự định ngày mai)" },
        { kanji: "約束", kana: "やくそく", mean: "Hứa, hẹn", example: "約束を守る。(Giữ lời hứa)" },
        { kanji: "連絡", kana: "れんらく", mean: "Liên lạc", example: "連絡してください。(Hãy liên lạc)" },
        { kanji: "相談", kana: "そうだん", mean: "Bàn bạc", example: "相談したい。(Muốn bàn bạc)" },
        { kanji: "説明", kana: "せつめい", mean: "Giải thích", example: "説明する。(Giải thích)" },
        { kanji: "質問", kana: "しつもん", mean: "Câu hỏi", example: "質問があります。(Có câu hỏi)" },
        { kanji: "答え", kana: "こたえ", mean: "Câu trả lời", example: "答えを書く。(Viết câu trả lời)" },
    ],

    // ───────────────────────────────────────────────────────────
    // CẤP ĐỘ N3 (Trung cấp)
    // ───────────────────────────────────────────────────────────
    n3: [
        { kanji: "環境", kana: "かんきょう", mean: "Môi trường", example: "環境問題。(Vấn đề môi trường)" },
        { kanji: "社会", kana: "しゃかい", mean: "Xã hội", example: "社会人になる。(Trở thành người đi làm)" },
        { kanji: "経済", kana: "けいざい", mean: "Kinh tế", example: "経済が発展する。(Kinh tế phát triển)" },
        { kanji: "政治", kana: "せいじ", mean: "Chính trị", example: "政治家。(Chính trị gia)" },
        { kanji: "文化", kana: "ぶんか", mean: "Văn hóa", example: "日本文化。(Văn hóa Nhật)" },
        { kanji: "伝統", kana: "でんとう", mean: "Truyền thống", example: "伝統的な祭り。(Lễ hội truyền thống)" },
        { kanji: "現代", kana: "げんだい", mean: "Hiện đại", example: "現代社会。(Xã hội hiện đại)" },
        { kanji: "将来", kana: "しょうらい", mean: "Tương lai", example: "将来の夢。(Ước mơ tương lai)" },
        { kanji: "過去", kana: "かこ", mean: "Quá khứ", example: "過去を振り返る。(Nhìn lại quá khứ)" },
        { kanji: "現在", kana: "げんざい", mean: "Hiện tại", example: "現在の状況。(Tình hình hiện tại)" },
        { kanji: "様々", kana: "さまざま", mean: "Đa dạng", example: "様々な意見。(Nhiều ý kiến khác nhau)" },
        { kanji: "複雑", kana: "ふくざつ", mean: "Phức tạp", example: "複雑な問題。(Vấn đề phức tạp)" },
        { kanji: "単純", kana: "たんじゅん", mean: "Đơn giản", example: "単純な仕事。(Công việc đơn giản)" },
        { kanji: "具体的", kana: "ぐたいてき", mean: "Cụ thể", example: "具体的な例。(Ví dụ cụ thể)" },
        { kanji: "抽象的", kana: "ちゅうしょうてき", mean: "Trừu tượng", example: "抽象的な概念。(Khái niệm trừu tượng)" },
    ],

    // ───────────────────────────────────────────────────────────
    // TỪ VỰNG TRÊN TRƯỜNG (Custom)
    // ───────────────────────────────────────────────────────────
    school: [
        { "kanji": "ここ / こちら", "kana": "ここ / こちら", "mean": "Đây, chỗ này / Phía này [cite: 103]", "example": "ここは受付です。" },
        { "kanji": "そこ / そちら", "kana": "そこ / そちら", "mean": "Kia, chỗ đó / Phía đó [cite: 104]", "example": "そこは会議室です。" },
        { "kanji": "あそこ / あちら", "kana": "あそこ / あちら", "mean": "Đó, chỗ kia / Phía kia [cite: 105]", "example": "あそこはトイレです。" },
        { "kanji": "インフォメーション", "kana": "インフォメーション", "mean": "Quầy thông tin [cite: 106]", "example": "インフォメーションはどこですか。" },
        { "kanji": "トイレ", "kana": "トイレ", "mean": "Nhà vệ sinh [cite: 111]", "example": "トイレへ行きます。" },
        { "kanji": "スーパー", "kana": "スーパー", "mean": "Siêu thị [cite: 114]", "example": "スーパーで買います。" },
        { "kanji": "レストラン", "kana": "レストラン", "mean": "Nhà hàng, quán ăn [cite: 117]", "example": "あのレストランはおいしいです。" },
        { "kanji": "地下", "kana": "ちか", "mean": "Ngầm, dưới lòng đất [cite: 118]", "example": "売り場は地下です。" },
        { "kanji": "携帯電話", "kana": "けいたいでんわ", "mean": "Điện thoại di động [cite: 120]", "example": "新しい携帯電話です。" },
        { "kanji": "電子辞書", "kana": "でんしじしょ", "mean": "Kim từ điển [cite: 121]", "example": "電子辞書を使います。" },
        { "kanji": "パソコン", "kana": "パソコン", "mean": "Máy tính cá nhân [cite: 122]", "example": "パソコンで勉強します。" },
        { "kanji": "消しゴム", "kana": "けしゴム", "mean": "Tẩy [cite: 124]", "example": "消しゴムを貸してください。" },
        { "kanji": "本", "kana": "ほん", "mean": "Sách [cite: 127]", "example": "これは日本の本です。" },
        { "kanji": "水", "kana": "みず", "mean": "Nước [cite: 167]", "example": "水を飲みます。" },
        { "kanji": "店員", "kana": "てんいん", "mean": "Nhân viên bán hàng [cite: 168]", "example": "あの人は店員です。" },
        { "kanji": "いくら", "kana": "いくら", "mean": "Bao nhiêu tiền [cite: 206]", "example": "これはいくらですか。" },
        { "kanji": "時計", "kana": "とけい", "mean": "Đồng hồ [cite: 204]", "example": "この時計は高いです。" },
    ]
};
