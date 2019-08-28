import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
const { expect, request } = chai;

describe('app base route /graphql', () => {
  it('should test the base / route to confirm connection', () => {
    request(app)
      .post('/graphql')
      .send({ query: '{welcome}'})
      .end((err, res) => {
        expect(200)
        if (err) return err;
      });
  });
});
