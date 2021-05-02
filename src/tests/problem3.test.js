import problem3 from "../resolve/problem3";

test('zero hours should return 0$', () => {
    let startDate = new Date();
    let endDate = new Date(startDate.getTime());
    const val = problem3(startDate, endDate);
    expect(val).toBe(0);
});

test('1 hours should return 5$', () => {
    let startDate = new Date();
    let endDate = new Date(startDate.getTime());
    endDate.setHours(startDate.getHours() + 1);
    expect(problem3(startDate, endDate)).toBe(5);
});

test('swap start and end date should return 5$', () => {
    let startDate = new Date();
    let endDate = new Date(startDate.getTime());
    endDate.setHours(startDate.getHours() + 1);
    expect(problem3(endDate, startDate)).toBe(5);
});

test('25 hours should return 10$', () => {
    let startDate = new Date();
    let endDate = new Date(startDate.getTime());
    endDate.setHours(startDate.getHours() + 25);
    expect(problem3(startDate, endDate)).toBe(10);
});

// import assert from 'assert';

// describe('Problem3', () => {
//     it('zero hours should return 0$', () => {
//         let startDate = new Date();
//         let endDate = new Date(startDate.getTime());
//         assert.equal(problem3(startDate, endDate), 0);
//     });

//     it('1 hours is 5$', () => {
//         let startDate = new Date();
//         let endDate = new Date(startDate.getTime());
//         endDate.setHours(startDate.getHours() + 1);
//         assert.equal(problem3(startDate, endDate), 5);
//     });

//     it('25 hours is 10$', () => {
//         let startDate = new Date();
//         let endDate = new Date(startDate.getTime());
//         endDate.setHours(startDate.getHours() + 25);
//         assert.equal(problem3(startDate, endDate), 10);
//     });
// });
