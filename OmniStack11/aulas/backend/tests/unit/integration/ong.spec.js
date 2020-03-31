const request =  require('supertest');
const app = require('../../../src/app');
const connection = require('../../../src/database/connection');

beforeEach(  async() => {
   await connection.migrate.rollback();
   await connection.migrate.latest();
});

afterAll( async () => {
  await connection.destroy();
})
describe('ONG', () => {
  it('should be able to create a new ONG', async () => {
  
    const response =  await request(app)
      .post('/ongs')
      .send({
       name:"teste1",
       email:"ansdasd@hotmail.com",
       whatsapp:"44544454666",
       city:"jaja",
       uf:"ja"
      });
  
      console.log(response.body); 
      
      expect( response.body).toHaveProperty('id');
      expect( response.body.id).toHaveLength(8);

      
  });
});