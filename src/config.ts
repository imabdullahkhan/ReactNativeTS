
interface ConfigInteface {
    PERSIST_SECRET_KEY: string;
    ENVIRONMENT: string;
    ENVIRONMENTS: {
        LOCAL: {
            API_URL: string
        },
        DEVELOPMENT: {
            API_URL: string
        },
        PRODUCTION: {
            API_URL: string
        }
    };
    env(): string;
}

let Config : ConfigInteface= {
    PERSIST_SECRET_KEY: "your-persist-secret-key",
    ENVIRONMENT: "DEVELOPMENT",
    ENVIRONMENTS: {
        LOCAL: {
            API_URL: "https://hacker-news.firebaseio.com/v0/"
        },
        DEVELOPMENT: {
            API_URL: "https://hacker-news.firebaseio.com/v0/"
        },
        PRODUCTION: {
            API_URL: "https://hacker-news.firebaseio.com/v0/"
        }
    },
    env() {
        return this.ENVIRONMENTS.PRODUCTION.API_URL;
    }
};


export default Config;
