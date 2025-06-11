// Blog management and content functionality
(function() {
    'use strict';
    
    // This is a test data, should be replaced with real data. I need yekyll or something like that
    const BLOG_POSTS = [
        {
            id: '1',
            title: 'Khóa luận tốt nghiệp - Ý tưởng',
            excerpt: 'Ý tưởng cho KLTN nếu được làm :))))',
            content: `
                <h1>Girlfriend simulator chatbot - a great alternative to dating apps.</h1>
                <p>Một chatbot giả lập bạn gái dành cho các chàng trai cô đơn cần được an ủi và lắng nghe.</p>
                <ul>
                    <li>Hỗ trợ tâm lý</li>
                    <li>Luôn lắng nghe</li>
                    <li>Không phán xét</li>
                </ul>
            `,
            category: 'tutorial',
            date: '2025-06-07',
            author: 'THD von Alexander'
        },

        {
            id: '2',
            title: 'Đề cương ôn tập CNXHKH',
            excerpt: 'Làm chủ CNXHKH trong 1 đêm nào :)))',
            sections: [
                {
                    heading: 'Câu 1: Sứ mệnh lịch sử của giai cấp công nhân',
                    content: `
                        <p><strong>Nội dung sứ mệnh lịch sử:</strong></p>
                        <ul>
                            <li>Lãnh đạo nhân dân lao động đấu tranh chuyển từ TBCN lên CNXH và CNCS.</li>
                            <li>Kinh tế: Cải tạo quan hệ sản xuất tư nhân TBCN, xây dựng quan hệ sản xuất mới - XHCN.</li>
                            <li>Chính trị: Lật đổ thống trị giai cấp tư sản, thiết lập nhà nước của giai cấp công nhân, nhân dân lao động từng bước lên XHCN.</li>
                            <li>Văn hóa, tư tưởng: Xây dựng nền văn hóa mới trên nền tảng hệ tư tưởng chính trị của giai cấp công nhân, thay thế hệ tư tưởng chính trị của giai cấp tư sản.</li>
                        </ul>
                        <p><strong>Điều kiện khách quan:</strong></p>
                        <ul>
                            <li>Địa vị kinh tế - xã hội: Là bộ phận quan trọng nhất của lực lượng sản xuất tiên tiến, quyết định việc phá vỡ TBCN, xây dựng phương thức sản xuất mới.</li>
                            <li>Địa vị chính trị - xã hội: Là giai cấp tiên tiến nhất, có ý thức tổ chức kỷ luật cao, tinh thần cách mạng triệt để, bản chất quốc tế.</li>
                        </ul>
                        <p><strong>Điều kiện chủ quan:</strong></p>
                        <ul>
                            <li>Đảng Cộng sản là điều kiện quan trọng, là đội tiên phong của giai cấp công nhân, tổ chức chính trị cao nhất, lấy chủ nghĩa Mác-Lênin làm kim chỉ nam.</li>
                            <li>ĐCS có trình độ lý luận và tổ chức cao để lãnh đạo, đề ra mục tiêu, phương hướng, đem lại sự giác ngộ, đoàn kết, giáo dục, tổ chức lãnh đạo toàn dân.</li>
                        </ul>
                    `
                },
                {
                    heading: 'Câu 2: Đặc điểm giai cấp công nhân Việt Nam và sứ mệnh lịch sử',
                    content: `
                        <p><strong>Đặc điểm:</strong></p>
                        <ul>
                            <li>Ra đời đầu thế kỷ 20, gắn với khai thác thuộc địa Pháp trong hoàn cảnh nửa thuộc địa, nửa phong kiến.</li>
                            <li>Có tinh thần dân tộc, truyền thống yêu nước, đoàn kết, gắn bó mật thiết với nông dân lao động.</li>
                            <li>Trưởng thành nhanh chóng về ý thức chính trị, thống nhất tư tưởng, có Đảng lãnh đạo.</li>
                        </ul>
                        <p><strong>Sứ mệnh lịch sử:</strong></p>
                        <ul>
                            <li>Giành độc lập dân tộc, lật đổ phong kiến, giành chính quyền, xây dựng CNXHCS.</li>
                            <li>Cải tạo xã hội cũ (phong kiến, thuộc địa).</li>
                            <li>Hiện nay: Chính trị - xã hội được củng cố, kinh tế - xã hội là lực lượng đi đầu trong CN hóa, văn hóa - xã hội xây dựng và phát triển văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.</li>
                        </ul>
                    `
                },
                {
                    heading: 'Câu 3: Thời kỳ quá độ lên CNXH',
                    content: `
                        <p><strong>Tính tất yếu:</strong> CNXH khác CNTB về bản chất, các quan hệ xã hội của CNXH không tự phát ra đời trong TBCN, xây dựng CNXH là công cuộc mới mẻ, khó khăn.</p>
                        <p><strong>Đặc điểm:</strong></p>
                        <ul>
                            <li>Kinh tế: Tồn tại nền kinh tế nhiều thành phần, có những thành phần đối lập với kinh tế XHCN.</li>
                            <li>Chính trị: Nhà nước chuyên chính vô sản được thiết lập, củng cố, hoàn thiện.</li>
                            <li>Tư tưởng - văn hóa: Thông qua ĐCS, từng bước xây dựng nền văn hóa mới XHCN, tiếp thu giá trị văn hóa dân tộc.</li>
                            <li>Xã hội: Cơ cấu giai cấp phức tạp, tồn tại nhiều giai cấp, tầng lớp xã hội với lợi ích đối lập nhau.</li>
                        </ul>
                        <p><strong>Ở Việt Nam:</strong> Xuất phát từ thuộc địa, nửa phong kiến, lực lượng sản xuất thấp, trải qua chiến tranh ác liệt, tiếp thu thành tựu nhân loại, tạo ra sự biến đổi về chất của xã hội trên tất cả các lĩnh vực.</p>
                    `
                },
                {
                    heading: 'Câu 4: Đặc trưng CNXH và mô hình CNXH ở Việt Nam',
                    content: `
                        <p><strong>Đặc trưng:</strong></p>
                        <ul>
                            <li>Giải phóng giai cấp, dân tộc, phát triển xã hội do nhân dân lao động làm chủ.</li>
                            <li>Kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất.</li>
                            <li>Nhà nước kiểu mới mang bản chất giai cấp công nhân, đại biểu cho lợi ích, quyền lực, ý chí nhân dân lao động.</li>
                            <li>Văn hóa phát triển cao, kế thừa và phát huy tinh hoa dân tộc, bảo đảm bình đẳng, đoàn kết giữa các dân tộc.</li>
                        </ul>
                        <p><strong>Mô hình CNXH Việt Nam:</strong> Dân giàu, nước mạnh, dân chủ, công bằng, văn minh; do nhân dân làm chủ; kinh tế phát triển cao; văn hóa tiên tiến, đậm đà bản sắc dân tộc; nhà nước pháp quyền XHCN của dân, do dân, vì dân và do ĐCS lãnh đạo.</p>
                    `
                },
                {
                    heading: 'Câu 5: Bản chất nền dân chủ XHCN và nhà nước pháp quyền XHCN ở Việt Nam',
                    content: `
                        <p><strong>Bản chất chính trị:</strong> Sự lãnh đạo chính trị của giai cấp công nhân thông qua Đảng với xã hội, mang bản chất giai cấp công nhân, tính nhân dân rộng rãi.</p>
                        <p><strong>Bản chất kinh tế:</strong> Chế độ sở hữu xã hội về tư liệu sản xuất, đảm bảo quyền làm chủ nhân dân.</p>
                        <p><strong>Bản chất tư tưởng - văn hóa - xã hội:</strong> Dựa trên tư tưởng Mác-Lênin, kế thừa và phát huy tinh hoa văn hóa dân tộc.</p>
                        <p><strong>Đặc điểm nhà nước pháp quyền XHCN:</strong> Nhà nước của dân, do dân, vì dân; tổ chức hoạt động dựa trên hiến pháp và pháp luật; quyền lực nhà nước thống nhất, có sự phân công, phối hợp, kiểm soát; do ĐCSVN lãnh đạo, giám sát bởi nhân dân; tôn trọng quyền công dân.</p>
                    `
                },
                {
                    heading: 'Câu 6: Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH',
                    content: `
                        <p><strong>Tính tất yếu:</strong> Liên minh giữa giai cấp công nhân với nông dân, trí thức là tất yếu, xuất phát từ quan hệ lợi ích thống nhất lâu dài, khác biệt lợi ích trước mắt, yêu cầu đấu tranh giai cấp.</p>
                        <p><strong>Nội dung liên minh:</strong></p>
                        <ul>
                            <li>Chính trị: Bảo vệ, xây dựng chế độ chính trị dân chủ XHCN, xóa bỏ chế độ áp bức bóc lột TBCN, xây dựng xã hội cộng sản chủ nghĩa.</li>
                            <li>Kinh tế: Tăng nhanh số lượng lực lượng sản xuất, phát triển quan hệ sản xuất mới, tham gia thực hiện mối quan hệ tác động lẫn nhau giữa công - nông - khoa học.</li>
                            <li>Văn hóa - xã hội: Trí thức truyền bá tri thức, khoa học, công nghệ; công nhân đưa hệ tư tưởng chính trị vào đời sống, nâng cao văn hóa - chính trị.</li>
                        </ul>
                    `
                },
                {
                    heading: 'Câu 7: Cương lĩnh dân tộc của chủ nghĩa Mác-Lênin, đặc điểm dân tộc Việt Nam và chính sách dân tộc',
                    content: `
                        <p><strong>Nội dung cương lĩnh:</strong></p>
                        <ul>
                            <li>Dân tộc hoàn toàn bình đẳng: Nghĩa vụ ngang nhau, bình đẳng pháp lý, thủ tiêu áp bức giai cấp dân tộc.</li>
                            <li>Dân tộc có quyền tự quyết: Tự quyết vận mệnh, quyền tách ra thành lập quốc gia độc lập, không đồng nhất quyền các dân tộc thiểu số.</li>
                            <li>Liên hợp công nhân các dân tộc: Thống nhất giữa giải phóng dân tộc, giai cấp, gắn bó giữa tinh thần yêu nước và quốc tế.</li>
                        </ul>
                        <p><strong>Đặc điểm dân tộc Việt Nam:</strong> Đoàn kết, ý thức cộng đồng, truyền thống yêu nước, phân bố chủ yếu ở địa bàn quan trọng, trình độ phát triển không đồng đều, bản sắc văn hóa riêng.</p>
                        <p><strong>Chính sách:</strong> Thực hiện quyền bình đẳng, đoàn kết, phát triển kinh tế - xã hội vùng dân tộc thiểu số, xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.</p>
                    `
                },
                {
                    heading: 'Câu 8: Vấn đề tôn giáo trong thời kỳ quá độ CNXH',
                    content: `
                        <p><strong>Nguyên tắc giải quyết:</strong> Tôn trọng, bảo đảm quyền tự do tín ngưỡng, khắc phục ảnh hưởng tiêu cực, đoàn kết người theo và không theo tôn giáo, có quan điểm lịch sử cụ thể.</p>
                        <p><strong>Đặc điểm tôn giáo Việt Nam:</strong> Đa dạng, đan xen, hòa bình, đồng hành cùng dân tộc, tín đồ là nhân dân lao động, yêu nước.</p>
                        <p><strong>Chính sách:</strong> Tôn trọng quyền tự do tín ngưỡng, đoàn kết đồng bào, chăm lo phát triển kinh tế, văn hóa, nghiêm cấm lợi dụng tôn giáo.</p>
                    `
                },
                {
                    heading: 'Câu 9: Gia đình trong thời kỳ quá độ CNXH',
                    content: `
                        <p><strong>Cơ sở xây dựng quan hệ gia đình:</strong></p>
                        <ul>
                            <li>Kinh tế: Chế độ sở hữu XHCN về tư liệu sản xuất, xóa bỏ bất bình đẳng xã hội, xây dựng quan hệ bình đẳng trong gia đình.</li>
                            <li>Chính trị - xã hội: Thiết lập chính quyền nhà nước, giải phóng phụ nữ, bảo vệ hạnh phúc, đảm bảo lợi ích công dân.</li>
                            <li>Văn hóa: Xây dựng giá trị văn hóa mới, phát triển giáo dục, đào tạo khoa học công nghệ, chế độ hôn nhân tiến bộ.</li>
                        </ul>
                        <p><strong>Sự biến đổi gia đình:</strong> Quy mô gia đình thu nhỏ, bình đẳng nam nữ cao hơn, biến đổi chức năng gia đình (tái sản xuất, kinh tế, giáo dục, thỏa mãn nhu cầu tâm lý), quan hệ vợ chồng bình đẳng, quan hệ các thế hệ có thể phát sinh mâu thuẫn.</p>
                    `
                }
            ],
            category: 'tutorial',
            date: '2025-06-08',
            author: 'THD von Alexander'
        },

        {
            id: '3',
            title: 'Khoa học Trái Đất và Sự sống',
            excerpt: 'Làm chủ KHTDSS nào :))))',
            sections: [
                {
                    heading: 'Câu 1: Trình bày những khái niệm về hệ mặt trời và trái đất',
                    content: `
                        <p><strong>a. Khái niệm về hệ mặt trời</strong></p>
                        <ul>
                            <li>Hệ mặt trời hay thái dương hệ là một hệ thống các thiên thể có mặt trời làm ngôi sao trung tâm và có 8 hành tinh chính thức quay quanh nó. Ngoài ra còn có các thiên thể khác nhỏ hơn.</li>
                            <li>Hệ mặt trời có mặt trời làm ngôi sao nóng sáng ở trung tâm. Xung quanh có các thiên thể nhỏ hơn là các hành tinh, tiểu hành tinh, các sao chổi, khí và bụi. Tính từ trong ra ngoài thái dương hệ có cấu trúc lần lượt là: Mặt trời – Thủy tinh – Kim tinh – Trái đất – Hỏa tinh – Vành đai tiểu hành tinh – Mộc tinh – Thổ tinh – Thiên vương tinh – Hải vương tinh – Hành tinh lùn Diêm Vương – Hành tinh lùn Eris – ngoài cùng là vành đai Kuiper và đám mây Oort.</li>
                            <li>8 hành tinh chính thức quay quanh mặt trời được chia làm nhóm 4 hành tinh phía trong gồm: Thủy tinh – Kim Tinh – Trái Đất – Hỏa Tinh và nhóm 4 hành tinh phía ngoài gồm: Mộc Tinh – Thổ Tinh – Thiên Vương Tinh – Hải Vương Tinh.</li>
                            <li>Nguồn gốc ra đời của các hành tinh và các thiên thể khác trong hệ được xác định là hệ quả của việc sụp đổ đám mây phân tử khổng lồ cách ngày nay khoảng 4,6 tỉ năm.</li>
                            <li>Cả thái dương hệ chịu sức hấp dẫn từ mặt trời.</li>
                            <li>Mặt trời là ngôi sao nóng sáng trung tâm của hệ, chứa 99% lượng vật chất của toàn hệ. Khối lượng Mặt Trời gấp 332900 lần khối lượng Trái Đất và có nhiệt độ và mật độ đủ lớn để xảy ra các phản ứng tổng hợp hạt nhân, giải phóng nguồn năng lượng khổng lồ phát xạ vào không gian dưới dạng các bức xạ điện từ với dải sóng cực đại vào vùng 400-700 nm hay còn gọi là vùng ánh sáng khả kiến.</li>
                            <li>Ngoài ánh sáng, Mặt Trời còn phát ra dòng điện tích liên tục gọi là plasma hay gió mặt trời, vận tốc của dòng hạt này trải rộng ra bên ngoài với vận tốc 1,5 triệu km/h tạo lên vùng khí quyển loãng thấm vào toàn bộ hệ mặt trời tới khoảng cách ít nhất là 100AU. Sao Thủy chịu ảnh hưởng lớn nhất từ tác động của gió mặt trời vì mất đi toàn bộ khí quyển.</li>
                            <li>Hệ Mặt Trời thực hiện các chuyển động tích cực trong dải ngân hà. Khoảng cách từ mặt trời tới trung tâm ngân hà vào khoảng 25000-28000 năm ánh sáng. Vận tốc của hệ Mặt Trời trên quỹ đạo khoảng 251 km/s. Nó hoàn thành vòng quay quanh Thiên Hà hết 225-250 triệu năm.</li>
                        </ul>
                        <p><strong>b. Khái niệm Trái Đất</strong></p>
                        <ul>
                            <li>Trái Đất là hành tinh thứ 3 tính từ trong ra của hệ mặt trời. Đồng thời là hành tinh lớn nhất trong tất cả các hành tinh đá của hệ khi xét về bán kính, mật độ và khối lượng. Trái Đất có một vệ tinh tự nhiên duy nhất là Mặt Trăng cũng là vệ tinh lớn nhất trong tất cả các vệ tinh của các hành tinh đá.</li>
                            <li>Trái Đất là hành tinh duy nhất đến thời điểm này được con người phát hiện có tồn tại sự sống. Người ta xác định được rằng Trái Đất hình thành cách đây khoảng 4,55 tỉ năm. Khí quyển chỉ xuất hiện cách ngày nay khoảng 3,5 tỉ năm và sự sống mới có mặt khoảng 1 tỉ năm, quá trình phát sinh sự sống phải trải qua nhiều con đường tiến hóa lâu dài.</li>
                            <li>Về hình dạng: Trái đất về tổng thể có dạng hình cầu với 75% diện tích là mặt nước và 25% diện tích trên đất liền. Về cụ thể Trái Đất có hình dạng hết sức phức tạp mà không mô phỏng theo một dạng hình học cụ thể nào nên người ta gọi nó là geoit. Có thể hình dung Trái Đất như một hình bầu dục quay với độ dẹt là a =1/298,25. Bán kính trung bình của trái đất là 6371km.</li>
                            <li>Về địa hình:</li>
                            <ul>
                                <li>Trái đất có 4 đại dương lớn là: Thái Bình Dương, Đại Tây Dương, Ấn Độ Dương, Bắc Băng Dương. Các đại dương thông với nhau hình thành đại dương thế giới. Địa hình đáy biển gồm các dạng cơ bản: Dải ven bờ, thềm lục địa, sườn lục địa, đáy đại dương và vực thẳm đại dương.</li>
                                <li>Đất liền gồm 6 châu lục với các dạng địa hình chủ yếu như: Núi, trung du và đồng bằng.</li>
                            </ul>
                        </ul>
                    `
                },
                {
                    heading: 'Câu 2: Chuyển động của Trái Đất quanh mặt trời và hệ quả',
                    content: `
                        <ul>
                            <li>Trái đất quay quanh mặt trời ngược chiều kim đồng hồ theo quỹ đạo elip gần tròn, mặt trời là một tiêu điểm.</li>
                            <li>Khoảng cách từ Trái Đất đến mặt trời dao động từ 147 triệu km đến 152 triệu km.</li>
                            <li>Thời gian một vòng quay: 365 ngày 5 giờ 48 phút 46 giây (4 năm có 1 năm nhuận).</li>
                            <li>Hệ quả: chuyển động biểu kiến hàng năm của mặt trời, hiện tượng mùa, ngày đêm dài ngắn theo mùa và vĩ độ, tạo nên các vành đai nhiệt trên Trái Đất.</li>
                        </ul>
                    `
                },
                {
                    heading: 'Câu 3: Chuyển động tự quay quanh trục của Trái Đất và hệ quả',
                    content: `
                        <ul>
                            <li>Trái Đất tự quay quanh trục từ tây sang đông, trục nghiêng 23,5° so với mặt phẳng hoàng đạo.</li>
                            <li>Hoàn thành một vòng quay trong 24h (theo mặt trời), tốc độ quay phụ thuộc vĩ độ.</li>
                            <li>Hệ quả: hiện tượng luân phiên ngày đêm, lực criolit làm lệch hướng chuyển động, giờ địa phương khác nhau, chia múi giờ, đường chuyển ngày quốc tế.</li>
                        </ul>
                    `
                },
                {
                    heading: 'Câu 4: Biển và đại dương, vai trò và biển đảo Việt Nam',
                    content: `
                        <ul>
                            <li>Biển là vùng nước mặn rộng lớn, đại dương là khối nước mặn lớn nhất, chiếm 71% diện tích bề mặt Trái Đất.</li>
                            <li>Độ mặn trung bình 3,5%. Biển Việt Nam độ mặn 3,3%.</li>
                            <li>Điều kiện hải văn: sóng, thủy triều, dòng biển (nóng/lạnh) ảnh hưởng khí hậu, sinh vật biển.</li>
                            <li>Vai trò: cung cấp tài nguyên sinh vật, khoáng sản, điều hòa khí hậu, giao thông, kinh tế, quốc phòng, du lịch.</li>
                            <li>Ảnh hưởng tiêu cực: bão, động đất, sóng thần, xâm nhập mặn, nước biển dâng, tranh chấp biển đảo.</li>
                            <li>Biển Việt Nam: diện tích >1 triệu km2, 3000 đảo, 2 quần đảo Hoàng Sa, Trường Sa, 5 vùng biển cơ bản theo luật biển quốc tế.</li>
                        </ul>
                    `
                },
                {
                    heading: 'Câu 5: Thổ quyển và đất, các yếu tố hình thành đất',
                    content: `
                        <ul>
                            <li>Thổ quyển là lớp ngoài cùng của thạch quyển bị biến đổi bởi nước, không khí, sinh vật, đặc trưng bởi độ phì.</li>
                            <li>Thổ nhưỡng là lớp vật chất tơi xốp ở bề mặt lục địa, có độ phì.</li>
                            <li>Các yếu tố hình thành đất: đá mẹ, khí hậu, sinh vật, địa hình, thời gian, con người.</li>
                            <li>Quá trình hình thành đất: phong hóa, tích lũy và biến đổi chất hữu cơ, chuyển dịch chất hữu cơ.</li>
                        </ul>
                    `
                },
                {
                    heading: 'Câu 6: Sinh quyển, các yếu tố ảnh hưởng và vai trò',
                    content: `
                        <ul>
                            <li>Sinh quyển là phần của Trái Đất có sinh vật cư trú, gồm hệ sinh thái, quần thể, loài, sinh đới.</li>
                            <li>Sinh quyển tác động mạnh mẽ tới thạch quyển, thổ quyển, khí quyển, thủy quyển.</li>
                            <li>Vai trò: quang hợp, hô hấp, phân hủy sinh học, điều khiển chu trình sinh địa hóa (N, P, C, S, nước).</li>
                            <li>Các yếu tố ảnh hưởng: khí hậu (nhiệt độ, nước, ánh sáng), đất, địa hình, sinh vật, con người.</li>
                        </ul>
                    `
                },
                {
                    heading: 'Câu 7: Vai trò của Trái Đất với con người và tác động của con người tới Trái Đất',
                    content: `
                        <ul>
                            <li>Trái Đất là không gian sinh sống, cung cấp tài nguyên, phân giải chất thải, cung cấp thông tin cho con người.</li>
                            <li>Con người tác động làm thay đổi địa hình, cảnh quan, sinh quyển, hệ sinh thái, khí quyển, thủy quyển, tài nguyên, chất lượng môi trường sống.</li>
                            <li>Hoạt động tích cực: bảo vệ môi trường, mở rộng rừng, bảo tồn đa dạng sinh học.</li>
                        </ul>
                    `
                },
                {
                    heading: 'Câu 8: Biến đổi khí hậu và tác động của con người',
                    content: `
                        <ul>
                            <li>Biến đổi khí hậu là sự thay đổi hệ thống khí hậu bởi các nhân tố tự nhiên hoặc nhân tạo.</li>
                            <li>Nhân tố tự nhiên: bức xạ mặt trời, quỹ đạo Trái Đất, hoạt động núi lửa, sol khí tự nhiên.</li>
                            <li>Nhân tố con người: hiệu ứng nhà kính (CO2, metan, oxit nitơ...), sol khí nhân tạo, phá rừng, đô thị hóa, biến đổi albedo bề mặt, mực nước biển dâng.</li>
                            <li>Hệ quả: nhiệt độ tăng, nước biển dâng, mưa axit, biến đổi khí hậu địa phương và toàn cầu.</li>
                        </ul>
                    `
                }
            ],
            category: 'tutorial',
            date: '2025-06-07',
            author: 'THD von Alexander'
        },

        {
            id: '4',
            title: 'Tartare de Saumon et Crevettes Poêlées',
            excerpt: 'Một món khai vị nhẹ nhàng, thanh mát với cá hồi sống trộn nước cốt chanh, thì là, đi cùng tôm sú áp chảo và sốt cà chua thủ công.',
            content: `
                <h1>RÉCETTE</h1>

                <h2>Les Ingrédients - Nguyên liệu</h2>

                <h3>Protéines - Chất đạm</h3>
                <ul>
                    <li>Crevettes tigres décortiquées - Tôm sú (đã bóc vỏ, bỏ đầu)</li>
                    <li>Filet de saumon frais - Phi-lê cá hồi tươi</li>
                </ul>

                <h3>Éléments de la sauce - Thành phần cho sốt</h3>
                <ul>
                    <li>Tomates bien mûres - Cà chua chín</li>
                    <li>Ail émincé - Tỏi băm nhỏ</li>
                    <li>Clous de girofle - Đinh hương</li>
                    <li>Feuilles de laurier - Lá nguyệt quế</li>
                    <li>Vin blanc sec - Rượu vang trắng (hoặc rượu nấu ăn nhẹ)</li>
                    <li>Beurre doux - Bơ nhạt</li>
                    <li>Huile d'olive extra vierge - Dầu ô liu nguyên chất</li>
                </ul>

                <h3>Assaisonnement - Gia vị</h3>
                <ul>
                    <li>Sel de mer fin - Muối biển mịn</li>
                    <li>Poivre noir du moulin - Tiêu đen xay thô</li>
                    <li>Jus de citron jaune - Nước cốt chanh vàng</li>
                    <li>Zeste de citron - Vỏ chanh vàng bào</li>
                    <li>Aneth frais - Thì là tươi</li>
                    <li>Ciboulette - Hành hoa (hẹ tây)</li>
                    <li>Mayonnaise - Sốt mayonnaise</li>
                </ul>

                <h3>Garniture suggérée - Gợi ý ăn kèm</h3>
                <ul>
                    <li>Pain grillé croustillant - Bánh mì nướng giòn</li>
                </ul>

                <h2>Préparation - Cách chế biến</h2>

                <h3>1. Préparation du saumon froid (Tartare de saumon léger)</h3>
                <p>Cắt Phi-lê cá hồi thành hạt lựu nhỏ. Trộn nhẹ tay cùng mayonnaise, nước cốt chanh vàng, vỏ chanh vàng bào, muối, tiêu, hành và thì là. Bọc kín và để lạnh ít nhất 30 phút trong ngăn mát.</p>

                <h3>2. Préparation des crevettes poêlées</h3>
                <p>Làm nóng chảo với một ít dầu ô liu. Áp chảo tôm đến khi chuyển màu hồng cam, mặt ngoài vàng nhẹ. Thêm một miếng nhỏ bơ, nghiêng chảo và rưới bơ nóng lên tôm. Rắc tiêu đen ngay khi tắt bếp.</p>

                <h3>3. Sauce tomate artisanale (Sốt cà chua thủ công)</h3>
                <p>Dùng đầu và vỏ tôm phi thơm với tỏi, bơ, muối và lá quế. Cho cà chua vào đảo đều, sau đó thêm rượu vang, đun thêm 10 phút. Xay nhuyễn và lọc lấy phần sốt mịn.</p>

                <h3>4. Dressage - Trình bày</h3>
                <p>Đặt tartare cá hồi vào khuôn tròn. Xếp tôm áp chảo bên cạnh, rưới sốt cà chua lên. Trang trí với thì là, vỏ chanh bào và vài giọt dầu ô liu. Dùng kèm bánh mì nướng.</p>

                <img src="images/food1.jpg" alt="Tartare de Saumon et Crevettes Poêlées" style="max-width:100%;border-radius:12px;margin-bottom:1.5em;">
                <p style="text-align:center; font-style:italic; color:#555; margin-top:-1em; margin-bottom:2em;">
                    Hình ảnh chỉ mang tính chất minh họa :)))))))
                </p>

                <h2>Cảm nhận</h2>
                <p>
                    Món ăn là một bản giao hưởng tinh tế giữa kỹ thuật ẩm thực Pháp và tâm hồn của người nấu. 
                    Ngay từ khi đọc danh sách nguyên liệu, tôi đã cảm nhận được sự tỉ mỉ trong việc lựa chọn và phối hợp mùi vị - một sự kết hợp có chủ đích
                    và mang chiều sâu của người am hiểu hương vị.
                </p>
                <p>
                    Tartare de saumon - phần khai vị nguội, được chế biến từ phi-lê cá hồi tươi, mang đến cảm giác trong trẻo như buổi sớm ngoài biển.  
                    Từng nguyên liệu khi hòa quyện đã tạo nên một tổng thể tươi sáng, béo nhẹ, thanh chua và đầy sống động. Vị chua của đăng và đắng nhẹ của vỏ chanh đã làm cho món ăn không bị ngấy khi kết hợp với độ béo của cá hồi. 
                    Một điều đặc biệt ấn tượng là sự xuất hiện của thì là - loại thảo mộc thường thấy trong các món ăn Việt Nam, 
                    nhưng ở đây lại được đưa vào một món tartare theo phong cách Pháp, vừa bất ngờ, vừa tinh tế, mở ra một góc nhìn rất Á Đông nhưng rất hợp lý.
                </p>
                <p>
                    Phần tôm áp chảo - crevettes poêlées - được xử lý với độ chính xác cao. Tôm chỉ chín tới, lớp vỏ se vàng nhẹ, phần thịt bên trong căng mọng, giữ trọn vị ngọt tự nhiên. 
                    Đặc biệt, kỹ thuật rưới bơ nóng (arroser) sau khi áp chảo là chi tiết thể hiện tay nghề của đầu bếp: vừa để tăng hương thơm, vừa tạo độ bóng hấp dẫn cho tôm. 
                    Việc rắc tiêu ngay khi tắt bếp càng làm nổi bật mùi tinh dầu thơm cay đầy gợi cảm. Đây không còn đơn thuần là món tôm nữa, mà là một lát cắt của nghệ thuật nấu ăn.
                </p>
                <p>
                    Như linh hồn của cả bản thể, phần sốt cà chua thủ công hiện lên như một bản nền nhung đỏ đầy quyến rũ. 
                    Việc sử dụng đầu và vỏ tôm để nấu sốt theo lối bisque - một kỹ thuật cổ điển trong ẩm thực Pháp - cho thấy sự am hiểu sâu sắc về cách chiết xuất umami từ nguyên liệu. 
                    Cà chua chín được ninh kỹ cùng bơ, tỏi, lá nguyệt quế và đinh hương tạo nên hương thơm nồng nàn mà không át vị chính. Việc thêm rượu vang trắng để khử mùi và làm dịu độ chua, 
                    đồng thời xay nhuyễn rồi lọc kỹ để chỉ giữ lại phần nước sốt mịn, như một sự kết hợp hoàn hảo cho món hải sản nấu cùng bơ. Phần sốt này không chỉ để "rưới lên", nó là cầu nối - kết nối giữa vị tươi lạnh của tartare và độ ngậy ấm của tôm nóng.
                </p>
                <p>
                    Cách trình bày món ăn cũng là một điểm sáng không thể bỏ qua. Từng chi tiết - từ việc tạo hình tartare bằng khuôn tròn nhỏ, đến cách xếp tôm cạnh bên và rưới nhẹ sốt cà chua - đều mang tinh thần của bistronomie: 
                    sang trọng mà không kiểu cách, tự nhiên mà vẫn gợi cảm. Nhánh thì là, vài giọt dầu ô liu, vỏ chanh vàng bào mỏng… đều không chỉ là trang trí, mà là những nét chấm phá mang chiều sâu hương vị, như một lời mời nhẹ nhàng đưa vị giác đến những cung bậc cảm xúc khác nhau.
                </p>
                <p>
                    Món ăn được xây dựng không chỉ bằng công thức, mà bằng cả sự đồng điệu giữa bàn tay và trái tim. 
                    Đó là sự kết hợp giữa kỹ thuật và cảm xúc, giữa cái đẹp thị giác và cái đẹp vị giác. 
                    Một món ăn giàu lớp lang, nhiều tầng vị, không phô trương nhưng rất có chiều sâu.
                </p>

            `,
            category: 'cooking',
            date: '2025-06-09',
            author: 'THD von Alexander'
        }



    ];
    
    // HERE IS MY STORIES
    const STORIES = [
        {
            id: '1',
            title: 'Cooking Story',
            excerpt: 'Liệu có tồn tại cái gọi là "món ăn độc bản"?',
            content: `
                <h1>"Độc bản" liệu có tồn tại?</h1>
                <p>
                    Thế giới ẩm thực như một khoảng không gian vô tận, nơi mà mỗi đầu bếp đều là một kẻ lữ hành, 
                    không ngừng lang thang, khám phá và sáng tạo, với khát vọng tìm ra chân trời mới cho hương vị
                    Trong suốt chiều dài lịch sử, cùng với nhu cầu ăn ngon của con người ngày càng tăng, số lượng cách kết hợp nguyên liệu và gia vị cũng theo đó mà bùng nổ.
                </p>
                <p>
                    Mỗi nguyên liệu đều mang một bản sắc riêng, mỗi loại gia vị đều sở hữu tính chất riêng biệt. 
                    Và khi chúng gặp nhau trong những tổ hợp khác nhau, chúng tạo nên những trải nghiệm vị giác mới mẻ, bất ngờ. 
                    Cùng với đó, vô số món ăn đã ra đời - mang trong mình dấu ấn của từng vùng miền, từng nền văn hóa, 
                    và đặc biệt là tiếng nói của người đầu bếp.
                </p>
                <p>
                    Vậy thì, khi trên thế giới đã tồn tại hàng trăm nền ẩm thực lớn, hàng ngàn món ăn kinh điển được truyền lại qua bao thế hệ, 
                    liệu còn ai vẫn mang trong mình khao khát: tạo ra một món ăn chưa từng tồn tại trên thế giới?
                </p>
                <p>
                    Những người đầu bếp ngày nay, trước khi cầm dao đứng trong gian bếp, cũng đã trải qua hành trình dài học hỏi: 
                    từ sách vở, trường lớp, từ những bậc tiền bối,... hoặc là tự tìm tòi, nghiên cứu. Họ rèn luyện kỹ thuật, nắm vững công thức, làm chủ quy trình. 
                    Thế nhưng, phần lớn những điều họ dùng để tạo nên món ăn hôm nay - từ nguyên liệu đến phương pháp - đều là kết tinh từ quá khứ. 
                    Những công thức được học, những kỹ thuật được truyền lại, đều mang hơi thở của những người đi trước.
                </p>
                <p>
                    Tôi viết những điều này, không phải để nói rằng họ thiếu tham vọng, hay phê phán họ chỉ biết học lại những gì đã có. 
                    Ngược lại, tôi luôn cảm thấy ngưỡng mộ những người dám bước vào khoảng không vô tận ấy, dám đối mặt với thực tại của cuộc sống để được cầm dao đứng trước chảo.
                    Mặc dù luôn tự hào rằng bản thân nấu ăn cũng có vẻ ngon đấy, luôn tự lừa mình rằng bản thân có thể tạo ra những món ăn độc lạ bằng những cách kết hợp độc đáo.
                    Nhưng trong thâm tâm, tôi là người hiểu rõ nhất, những gì mình nấu, những kỹ thuật mình dùng, cũng chỉ là những bản sao vụng về của những điều mình luôn ao ước.
                </P>
                <p>
                    Từ cách áp chảo kiểu poêlés, đến công thức nước sốt tận dụng umami từ hải sản - tất cả đều đã có quá nhiều người đi trước từng làm, từng tinh luyện, và đưa lên tầm nghệ thuật. 
                    Tôi chỉ đang lần theo dấu vết của họ, cố gắng ghép lại từng mảnh tri thức mà mình nhặt nhạnh được, mong sao ra được điều gì đó đủ để gọi là "của mình", đủ để nói rằng đó là sở thích, là đam mê.
                </P
                <p>
                    Cũng chính vì vậy, một người chẳng là ai cả như tôi, lại luôn khao khát tạo ra thứ gì đó chưa từng tồn tại để thế giới này, một thứ thể hiện "cái tôi", bản chất và khao khát trong tôi.
                    Những thứ đó, không phải để giành lấy một vị trí trên bản đồ ẩm thực thế giới, mà chỉ để một lần, tôi tạo ra thứ gì đó để có khẳng định với mọi người nấu nướng thực sự là đam mê của mình.
                </p>
            `,
            date: '2025-06-011',
            author: 'THD von Alexander'
        },
        {
            id: '2',
            title: 'Cuộc sống đại học với các bộn làn',
            excerpt: 'Đoàn kết, đoàn kết, đại đoàn kết! Thành công, thành công, đại thành công!',
            content: `
                <h1>Cuộc sống đại học với các bộn làn</h1>
                <p>Thất nghiệp rồi :))</p>
                <p>Đm cuộc đời :v</p>
            `,
            date: '2025-06-07',
            author: 'THD von Alexander'
        },
        {
            id: '3',
            title: 'Cần hay không việc phụ thuộc vào xã hội để tồn tại?',
            excerpt: 'Một người có thể sống tốt, dù cho không có ai bên cạnh.',
            content: `
                <h1>Cần hay không việc phụ thuộc vào xã hội để tồn tại?</h1>
                <p>
                            Động vật, về cơ bản là sống bầy đàn. Đơn giản nhất, cần ít nhất 2 cá thể để duy trì nòi giống. Hoặc tùy thuộc vào độ khó bắt của con mồi mà cần săn theo nhóm. Đương nhiên, cũng có một số loài chỉ đi tìm bạn tình khi đến mùa, 
                            hay đủ mạnh để săn một mình, hoặc đơn giản là nó ăn cỏ. Vậy có một câu hỏi là: “nếu loài động vật trên không giao phối thì các con hoàn toàn sống tách biệt với nhau trong bầy à?”. Câu trả lời là “đéo”, bản năng động vật buộc chúng phải tìm thấy nhau, 
                            mục đích là duy trì nòi giống. Nếu không làm vậy thì chúng không thể tồn tại đến bây giờ để con người mổ xẻ ra nghiên cứu được rồi. Nên nói tóm lại, việc chúng liên kết với nhau nằm ở “bản năng tồn tại”.
                        </p>
                        <p>
                            Xét sang con người thì, đúng là ngay cả khi tiền tệ chưa ra đời, cuộc sống vẫn chỉ  đang ở mức làm gì ăn nấy thì con người đã nghĩ ra việc trao đổi đồ cho nhau. Trao đi cái mình thừa hay làm ra và đổi lấy cái mình cần. Khi tiền tệ ra đời thì nó trở thành vật trung gian. 
                            Nên về cơ bản, cho dù có một mối liên kết giữa người với người thì nó cũng chỉ là mối quan hệ trao đổi hàng hóa, một mối quan hệ win-win. 
                        </p>
                        <p>
                            Nên về cơ bản thì, những mối quan hệ ở mức độ ”trao đổi hàng hóa” và chưa vượt khỏi cái “ngưỡng” đấy mục đích là để con người tối ưu cuộc sống của mình, 
                            bằng cách đáp ứng những nhu cầu cần thiết. Tóm lại, việc tiếp xúc xã hội ở mức vừa đủ để đáp ứng nhu cầu - mà không cần ràng buộc về cảm xúc hay xã hội có thể khẳng định chủ nghĩa cá nhân có tồn tại, dù sống trong một hệ thống có tính tương tác.
                        </p>
            `,
            date: '2025-06-08',
            author: 'THD von Alexander'
        },

        {
            id: '4',
            title: 'Tuyển tập Caption xàm lồn',
            excerpt: 'Các kiểu thể loại caption xàm lồn của THD von Alexander da Poet',
            sections: [
                {
                    heading: 'Caption 1',
                    content: `
                        <blockquote>
                        Em là người bán cá vô tâm <br>
                        Để lại cho anh toàn khúc mắc
                        </blockquote>
                    `
                },
                {
                    heading: 'Caption 2',
                    content: `
                        <blockquote>
                        Nàng 36.5 độ thân nhiệt, sao nói ra lời lạnh như băng
                        
                        </blockquote>
                    `
                },
                {
                    heading: 'Caption 3',
                    content: `
                        <blockquote>
                        Hoa trong thiên hạ nhiều vô kể <br>
                        Nhưng sao sánh được mùi hương liền kề
                        </blockquote>
                    `
                }
            ],
            date: '2025-06-08',
            author: 'THD von Alexander'
        }
    ];

    [BLOG_POSTS, STORIES].forEach(list => {
    list.forEach(item => {
        if (!item.content && item.sections) {
            item.content = item.sections.map(
                section => `<h2>${section.heading}</h2>${section.content}`
            ).join('');
        }
    });
});
    
    let allPosts = [];
    let filteredPosts = [];
    let currentCategory = 'all';
    let currentSearchTerm = '';
    
    /**
     * Initialize blog functionality
     */
    function initializeBlog() {
        allPosts = [...BLOG_POSTS];
        filteredPosts = [...allPosts];
        
        setupEventListeners();
        loadBlogContent();
        loadPostContent();
        loadStoryContent();
    }
    
    /**
     * Setup event listeners for blog interactions
     */
    function setupEventListeners() {
        // Category filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                handleCategoryFilter(this.dataset.category);
            });
        });
        
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', debounce(handleSearch, 300));
        }
    }
    
    /**
     * Handle category filtering
     * @param {string} category - Category to filter by
     */
    function handleCategoryFilter(category) {
        currentCategory = category;
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('filter-btn--active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('filter-btn--active');
        
        filterAndDisplayPosts();
    }
    
    /**
     * Handle search functionality
     * @param {Event} event - Input event
     */
    function handleSearch(event) {
        currentSearchTerm = event.target.value.toLowerCase().trim();
        filterAndDisplayPosts();
    }
    
    /**
     * Filter posts based on current category and search term
     */
    function filterAndDisplayPosts() {
        filteredPosts = allPosts.filter(post => {
            const matchesCategory = currentCategory === 'all' || post.category === currentCategory;
            const matchesSearch = currentSearchTerm === '' || 
                post.title.toLowerCase().includes(currentSearchTerm) ||
                post.excerpt.toLowerCase().includes(currentSearchTerm) ||
                post.content.toLowerCase().includes(currentSearchTerm);
            
            return matchesCategory && matchesSearch;
        });
        
        displayBlogPosts();
    }
    
    /**
     * Display blog posts in the grid
     */
    function displayBlogPosts() {
        const blogGrid = document.getElementById('blogGrid');
        const emptyState = document.getElementById('emptyState');
        
        if (!blogGrid) return;
        
        // Sort filtered posts by date (newest first)
        const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        if (sortedPosts.length === 0) {
            blogGrid.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        if (emptyState) emptyState.style.display = 'none';
        blogGrid.style.display = 'grid';
        
        blogGrid.innerHTML = sortedPosts.map(post => createBlogCard(post)).join('');
        
        // Add click event listeners
        blogGrid.querySelectorAll('.card').forEach((card, index) => {
            card.addEventListener('click', function() {
                window.location.href = `blog-post.html?id=${sortedPosts[index].id}`;
            });
        });
    }
    
    /**
     * Load blog listing page content
     */
    function loadBlogContent() {
        if (document.getElementById('blogGrid')) {
            displayBlogPosts();
        }
        
        // Load stories if on stories page
        if (document.getElementById('storiesGrid')) {
            displayStories();
        }
    }
    
    /**
     * Display stories in the grid
     */
    function displayStories() {
        const storiesGrid = document.getElementById('storiesGrid');
        const emptyState = document.getElementById('emptyState');
        
        if (!storiesGrid) return;
        
        if (STORIES.length === 0) {
            storiesGrid.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        if (emptyState) emptyState.style.display = 'none';
        storiesGrid.style.display = 'grid';
        
        storiesGrid.innerHTML = STORIES.map(story => createStoryCard(story)).join('');
        
        // Add click event listeners
        storiesGrid.querySelectorAll('.card').forEach((card, index) => {
            card.addEventListener('click', function() {
                window.location.href = `story.html?id=${STORIES[index].id}`;
            });
        });
    }
    
    /**
     * Load individual blog post content
     */
    function loadPostContent() {
        if (!window.location.pathname.includes('blog-post.html')) return;
        
        const postId = getUrlParameter('id');
        if (!postId) {
            showPostError('No post ID provided');
            return;
        }
        
        const post = BLOG_POSTS.find(p => p.id === postId);
        if (!post) {
            showPostError('Post not found');
            return;
        }
        
        displayPost(post);
    }
    
    /**
     * Load individual story content
     */
    function loadStoryContent() {
        if (!window.location.pathname.includes('story.html')) return;
        
        const storyId = getUrlParameter('id');
        if (!storyId) {
            showStoryError('No story ID provided');
            return;
        }
        
        const story = STORIES.find(s => s.id === storyId);
        if (!story) {
            showStoryError('Story not found');
            return;
        }
        
        displayStory(story);
    }
    
    /**
     * Display individual blog post
     * @param {Object} post - Blog post object
     */
    function displayPost(post) {
        // Update page title and meta
        document.title = `${post.title} - Personal Blog & Portfolio`;
        const metaDescription = document.getElementById('postDescription');
        if (metaDescription) {
            metaDescription.setAttribute('content', post.excerpt);
        }
        
        // Update content elements
        const elements = {
            postTitleDisplay: post.title,
            breadcrumbTitle: post.title,
            postTitle: post.title,
            postDate: formatDate(post.date),
            postCategory: post.category,
            postReadTime: `${calculateReadTime(post.content)} min read`,
            postContent: post.content
        };
        
        Object.entries(elements).forEach(([id, content]) => {
            const element = document.getElementById(id);
            if (element) {
                if (id === 'postContent') {
                    element.innerHTML = content;
                } else {
                    element.textContent = content;
                }
            }
        });
    }
    
    /**
     * Display individual story
     * @param {Object} story - Story object
     */
    function displayStory(story) {
        // Update page title and meta
        document.title = `${story.title} - Personal Blog & Portfolio`;
        const metaDescription = document.getElementById('storyDescription');
        if (metaDescription) {
            metaDescription.setAttribute('content', story.excerpt);
        }
        
        // Update content elements
        const elements = {
            storyTitleDisplay: story.title,
            breadcrumbTitle: story.title,
            storyTitle: story.title,
            storyDate: formatDate(story.date),
            storyReadTime: `${calculateReadTime(story.content)} min read`,
            storyContent: story.content
        };
        
        Object.entries(elements).forEach(([id, content]) => {
            const element = document.getElementById(id);
            if (element) {
                if (id === 'storyContent') {
                    element.innerHTML = content;
                } else {
                    element.textContent = content;
                }
            }
        });
    }
    
    /**
     * Show error for blog post
     * @param {string} message - Error message
     */
    function showPostError(message) {
        const contentElement = document.getElementById('postContent');
        if (contentElement) {
            contentElement.innerHTML = `
                <div class="error-state">
                    <h3>Error Loading Post</h3>
                    <p>${escapeHtml(message)}</p>
                    <a href="blog.html" class="btn btn--primary">Back to Blog</a>
                </div>
            `;
        }
    }
    
    /**
     * Show error for story
     * @param {string} message - Error message
     */
    function showStoryError(message) {
        const contentElement = document.getElementById('storyContent');
        if (contentElement) {
            contentElement.innerHTML = `
                <div class="error-state">
                    <h3>Error Loading Story</h3>
                    <p>${escapeHtml(message)}</p>
                    <a href="stories.html" class="btn btn--primary">Back to Stories</a>
                </div>
            `;
        }
    }
    
    /**
     * Create HTML for a blog post card
     * @param {Object} post - Blog post object
     * @returns {string} HTML string
     */
    function createBlogCard(post) {
        return `
            <article class="card">
                <div class="card__meta">
                    <span class="card__category">${escapeHtml(post.category)}</span>
                    <time class="card__date">${formatDate(post.date)}</time>
                    <span class="card__read-time">${calculateReadTime(post.content)} min read</span>
                </div>
                <h3 class="card__title">${escapeHtml(post.title)}</h3>
                <p class="card__excerpt">${escapeHtml(post.excerpt)}</p>
            </article>
        `;
    }
    
    /**
     * Create HTML for a story card
     * @param {Object} story - Story object
     * @returns {string} HTML string
     */
    function createStoryCard(story) {
        return `
            <article class="card">
                <div class="card__meta">
                    <time class="card__date">${formatDate(story.date)}</time>
                    <span class="card__read-time">${calculateReadTime(story.content)} min read</span>
                </div>
                <h3 class="card__title">${escapeHtml(story.title)}</h3>
                <p class="card__excerpt">${escapeHtml(story.excerpt)}</p>
            </article>
        `;
    }
    
    // Utility functions (shared with main.js but redefined for independence)
    
    /**
     * Format date for display
     * @param {string} dateString - ISO date string
     * @returns {string} Formatted date
     */
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    /**
     * Calculate estimated reading time
     * @param {string} content - Content text
     * @returns {number} Reading time in minutes
     */
    function calculateReadTime(content) {
        const wordsPerMinute = 200;
        const text = content.replace(/<[^>]*>/g, ''); // Strip HTML tags
        const wordCount = text.split(/\s+/).length;
        return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    }
    
    /**
     * Escape HTML to prevent XSS
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    /**
     * Get URL parameters
     * @param {string} param - Parameter name
     * @returns {string|null} Parameter value
     */
    function getUrlParameter(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    
    /**
     * Debounce function to limit function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Public API for main.js integration
    window.BlogManager = {
        getBlogPosts: () => [...BLOG_POSTS],
        getStories: () => [...STORIES],
        getPostById: (id) => BLOG_POSTS.find(post => post.id === id),
        getStoryById: (id) => STORIES.find(story => story.id === id)
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeBlog);
    } else {
        initializeBlog();
    }
    

    function generateTOC(contentId, tocId) {
        const content = document.getElementById(contentId);
        const toc = document.getElementById(tocId);
        if (!content || !toc) return;
        const headings = content.querySelectorAll('h2, h3');
        if (headings.length === 0) {
            toc.style.display = 'none';
            return;
        }
        let tocHtml = '<ul>';
        headings.forEach((heading, idx) => {
            if (!heading.id) heading.id = `section-${idx}`;
            tocHtml += `<li style="margin-left:${heading.tagName === 'H3' ? '1em' : '0'}">
                <a href="#${heading.id}">${heading.textContent}</a>
            </li>`;
        });
        tocHtml += '</ul>';
        toc.innerHTML = tocHtml;
        toc.style.display = 'block';
    }

    // Gọi sau khi render nội dung
    function tryGenerateTOC() {
        if (document.getElementById('postContent') && document.getElementById('toc')) {
            generateTOC('postContent', 'toc');
        }
        if (document.getElementById('storyContent') && document.getElementById('toc')) {
            generateTOC('storyContent', 'toc');
        }
    }

    // Gọi sau khi hiển thị post hoặc story
    const oldDisplayPost = displayPost;
    displayPost = function(post) {
        oldDisplayPost(post);
        setTimeout(tryGenerateTOC, 0);
    };
    const oldDisplayStory = displayStory;
    displayStory = function(story) {
        oldDisplayStory(story);
        setTimeout(tryGenerateTOC, 0);
    };



})();

// Export functions for main.js
function getBlogPosts() {
    return window.BlogManager ? window.BlogManager.getBlogPosts() : [];
}

function getStories() {
    return window.BlogManager ? window.BlogManager.getStories() : [];
}

// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    const tocToggle = document.getElementById('tocToggle');
    const toc = document.getElementById('toc');
    let backdrop = document.querySelector('.toc-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'toc-backdrop';
        toc.parentNode.insertBefore(backdrop, toc.nextSibling);
    }
    function closeTOC() {
        toc.classList.remove('toc--open');
        backdrop.style.display = 'none';
    }
    if (tocToggle && toc) {
        tocToggle.addEventListener('click', function() {
            toc.classList.toggle('toc--open');
            backdrop.style.display = toc.classList.contains('toc--open') ? 'block' : 'none';
        });
        backdrop.addEventListener('click', closeTOC);
    }
});