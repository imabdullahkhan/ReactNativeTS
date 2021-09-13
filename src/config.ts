
interface ConfigInteface {
    PERSIST_SECRET_KEY: string;
    ENVIRONMENT: string;
    ENVIRONMENTS: {
        LOCAL: {
            API_URL: "http://localhost:3000"
        },
        DEVELOPMENT: {
            API_URL: "https://dotfmc.tk/api"
        },
        PRODUCTION: {
            API_URL: "http://localhost:3004"
        }
    };
    env(): string;
}

let Config : ConfigInteface= {
    PERSIST_SECRET_KEY: "range-connect123",
    ENVIRONMENT: "DEVELOPMENT",
    ENVIRONMENTS: {
        LOCAL: {
            API_URL: "http://localhost:3000"
        },
        DEVELOPMENT: {
            API_URL: "https://dotfmc.tk/api"
        },
        PRODUCTION: {
            API_URL: "http://localhost:3004"
        }
    },
    env() {
        return this.ENVIRONMENTS.PRODUCTION.API_URL;
    }
};


export default Config;
