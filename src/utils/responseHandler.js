const responseHandler = (req, res, next) => {
    // Success response wrapper
    res.success = (data, message = 'Success', statusCode = 200) => {
        return res.status(statusCode).json({
            success: true,
            message,
            data
        });
    };

    // Error response wrapper
    res.error = (message = 'Error', statusCode = 400, errors = null) => {
        return res.status(statusCode).json({
            success: false,
            message,
            errors
        });
    };

    // Pagination response wrapper
    res.paginate = (data, total, page, limit, message = 'Success') => {
        const totalPages = Math.ceil(total / limit);
        return res.status(200).json({
            success: true,
            message,
            data,
            pagination: {
                total,
                page,
                limit,
                totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            }
        });
    };

    next();
};

export default responseHandler; 