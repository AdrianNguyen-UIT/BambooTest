const request = require("supertest");
const URL = "http://localhost:3000";

const sumSamples = [
    [1, 2, 3],
    [10, 12, 22],
    [100, 99, 199]
];

const subSamples = [
    [1, 2, -1],
    [10, 12, -2],
    [100, 99, 1]
];

describe("testing GET /sum", () => {
    for (let index = 0; index < sumSamples.length; index++) {
        it("should return 200", async () => {
            const a = sumSamples[index][0];
            const b = sumSamples[index][1];
            const c = sumSamples[index][2];
            const response = await request(URL).get(`/sum/${a}&${b}`);
            expect(response.statusCode).toBe(200);
            expect(response.body.data).toBe(c);
            expect(response.body.error).toBe(null);
        });
    }
});

describe("testing GET /sub", () => {
    for (let index = 0; index < subSamples.length; index++) {
        it("should return 200", async () => {
            const a = sumSamples[index][0];
            const b = sumSamples[index][1];
            const c = sumSamples[index][2];
            const response = await request(URL).get(`/sum/${a}&${b}`);
            expect(response.statusCode).toBe(200);
            expect(response.body.data).toBe(c);
            expect(response.body.error).toBe(null);
        });
    }
});