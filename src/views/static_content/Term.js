import React from 'react';
import { View } from 'react-native'
import { Text } from 'react-native-elements'

export const Term = () => {
    return (
        <View>
            <Text h4 style={{color: '#4a4a4a'}}>1. Giới thiệu</Text>
            <Text style={{color: '#4a4a4a', fontSize: 16}}>
                Chào mừng quý khách hàng đến với Eduworks.vn,{"\n"}{"\n"}
                Chúng tôi là nền tảng cung cấp các khóa học đào tạo chuyên sâu về kiến thức chuyên môn và kỹ năng thực tiễn mà mỗi công việc yêu cầu và đòi hỏi và trực thuộc Công ty Cổ phần Navigos Group Việt Nam và chúng tôi có địa chỉ trụ sở tại 11 Đoàn Văn Bơ, Phường 12, Quận 4, TP. Hồ Chí Minh.{"\n"}{"\n"}
                Khi quý khách hàng truy cập vào website của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này. Website có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản sử dụng này vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên website mà không cần thông báo trước. Và khi quý khách tiếp tục sử dụng website, sau khi các thay đổi về Điều khoản sử dụng này được đăng tải, có nghĩa là quý khách chấp nhận với những thay đổi đó.{"\n"}{"\n"}
                Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.
            </Text>
        </View>
    );
};
