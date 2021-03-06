let nextId = 0;

export const makeId = () => ++nextId;

type LogFunc = (...msg: any[]) => void;

export interface ILogger {
    debug: LogFunc;
    log:   LogFunc;
    warn:  LogFunc;
    error: LogFunc;
}

export const makeConsoleLogger = (custHdr?: any): ILogger => {
    const hdr = custHdr || `[${makeId()}]`;
    return {
        debug: (...msg) => console.debug(hdr, ...msg),
        log: (...msg)   => console.log(hdr, ...msg),
        warn: (...msg)  => console.warn(hdr, ...msg),
        error: (...msg) => console.error(hdr, ...msg)
    };
};
