import { sampleGet } from "../src/index";


test("test samppleGet is expected", async () => {
    const result = await sampleGet();
    expect(result.recipes).toHaveLength(10);
    result.recipes.forEach(element => {
        expect(element).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String)    
        })
        
    });
});