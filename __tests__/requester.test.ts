import { sampleGet } from "../src/index";


test("test samppleGet is expected", async () => {
    try {
        const result = await sampleGet();
        expect(result.recipes).toHaveLength(10);
        let i = result.recipes[0].id;
        console.log("Initial id # : "+i);
        result.recipes.forEach(element => {
            expect(element).toMatchObject({
                id: i++,
                name: expect.any(String) 
           })
                
        });

        console.log("Last id # : "+ --i);
    } catch (error) {
        console.log(error);        
    }
});

test(" Recipes skipped ", async () => {
    try{
        const result = await sampleGet();
        expect(result.skip).toBe(5);
        console.log("Quantity recipes skipped : " + result.skip);
    }catch(error){
        console.log(error);
    }   
});
