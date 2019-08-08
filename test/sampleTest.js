import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('app base route /', () => {
  it('should test the base / route to confirm connection', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        if (err) return done(err);
      });
  });
});
