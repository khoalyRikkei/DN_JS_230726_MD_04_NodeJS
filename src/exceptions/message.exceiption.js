const errorMessages = {
  BadRequestException: "Yêu cầu không hợp lệ",
  UnauthorizedException: "Không được phép truy cập",
  NotFoundException: "Không tìm thấy",
  ForbiddenException: "Từ chối truy cập",
  UnprocessableEntityException: "Không thể xử lý yêu cầu",
  InternalServerErrorException: "Lỗi máy chủ nội bộ",
  ServiceUnavailableException: "Dịch vụ không khả dụng",
};

// BadRequestException: Yêu cầu không hợp lệ từ phía client, server không thể hoặc không muốn xử lý.

// UnauthorizedException: Người dùng chưa được xác thực hoặc không có quyền truy cập tài nguyên.

// NotFoundException: Không tìm thấy tài nguyên được yêu cầu.

// ForbiddenException: Yêu cầu bị từ chối do không có quyền truy cập tài nguyên.

// NotAcceptableException: Server không thể sản xuất phản hồi phù hợp với các giá trị chấp nhận được được định nghĩa trong các tiêu đề yêu cầu.

// RequestTimeoutException: Server không nhận được một thông điệp yêu cầu hoàn chỉnh trong khoảng thời gian được chuẩn bị chờ đợi.

// ConflictException: Yêu cầu không thể hoàn thành do xung đột với trạng thái hiện tại của tài nguyên.

// GoneException: Tài nguyên được yêu cầu không còn tồn tại và sẽ không được cung cấp lại.

// PayloadTooLargeException: Dữ liệu gửi đến server quá lớn và server từ chối xử lý yêu cầu.

// UnsupportedMediaTypeException: Server từ chối phục vụ yêu cầu do định dạng dữ liệu không được hỗ trợ.

// UnprocessableEntityException: Server không thể xử lý yêu cầu do nội dung của yêu cầu không hợp lý.

// InternalServerErrorException: Lỗi xảy ra từ phía server khi không biết cách xử lý tình huống cụ thể.

// NotImplementedException: Server không hỗ trợ chức năng được yêu cầu.

// ImATeapotException: Một định nghĩa lỗi đặc biệt, thường được sử dụng để đảm bảo phần mềm không mong muốn sử dụng ổ đĩa trà.

// MethodNotAllowedException: Phương thức yêu cầu không được phép cho tài nguyên được yêu cầu.

// BadGatewayException: Server hoạt động làm cổng chuyển tiếp và nhận được phản hồi không hợp lý từ server trung ương.

// ServiceUnavailableException: Server không thể xử lý yêu cầu do tạm thời không khả dụng.

// GatewayTimeoutException: Cổng chuyển tiếp không nhận được phản hồi từ server trung ương trong khoảng thời gian chờ đợi.
