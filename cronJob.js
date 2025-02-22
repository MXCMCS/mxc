const cron = require('node-cron');
const axios = require('axios');

// Định nghĩa Cron Job
cron.schedule('*/10 * * * *', async () => {
    try {
        console.log('Cron Job is running...'); // Log thông báo khi cron job chạy
        // Gửi yêu cầu HTTP đến chính ứng dụng
        await axios.get('https://mxc-1y0v.onrender.com/'); // Thay 'your-app-url.com' bằng URL thực tế của ứng dụng
    } catch (error) {
        console.error('Error sending request:', error);
    }
});
