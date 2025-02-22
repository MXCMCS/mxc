import CronJob from "cron";
import https from "https";

const URL: string = "https://mxc-1y0v.onrender.com";

const job: CronJob = new cron.CronJob("*/14 * * * *", function (): void {
    https
        .get(URL, (res): void => {
            if (res.statusCode === 200) {
                console.log("GET request sent successfully");
            } else {
                console.log("GET request failed", res.statusCode);
            }
        })
        .on("error", (e: Error): void => {
            console.error("Error while sending request", e);
        });
});

export default job;

