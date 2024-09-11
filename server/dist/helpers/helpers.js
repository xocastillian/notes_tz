"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateObjectId = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const validateObjectId = (id, message) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new common_1.NotFoundException(message);
    }
};
exports.validateObjectId = validateObjectId;
//# sourceMappingURL=helpers.js.map