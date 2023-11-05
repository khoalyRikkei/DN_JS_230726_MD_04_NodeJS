export const MSG_COMMON = {
  MSG_ERROR: {
    BadRequestException: "Yêu cầu không hợp lệ",
    UnauthorizedException: "Yêu cầu xác thực",
    NotFoundException: "Không tìm thấy tài nguyên",
    ForbiddenException: "Từ chối truy cập",
    InternalServerException: "Lỗi server",
  },
  MSG_SUCCESS: (data) => ({
    create: `Tạo ${data} thành công`,
    read: `Lấy ${data} thành công`,
    update: `Update ${data} thành công`,
    delete: `Delete ${data} thành công`,
  }),
  MSG_FAILURE: (data) => ({
    create: `Tạo ${data} thất bại`,
    read: `Lấy ${data} thất bại`,
    update: `Update ${data} thất bại`,
    delete: `Delete ${data} thất bại`,
  }),
};

export const MSG_VALIDATION = {
  UnauthorizedException: "Email hoặc mật khẩu không đúng",
};
