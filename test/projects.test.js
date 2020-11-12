process.env.NODE_ENV = 'test';

const app = require('../app');
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const dirtyChai = require('dirty-chai');
let projectService = require('../services/project');

const expect = chai.expect;
chai.use(chaiHttp);
chai.use(dirtyChai);

describe('Projects tests', () => {

    it('should add a new project in database', async () => {
        let res = await chai
            .request(app)
            .post('/project')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                name: 'Projet Test',
                description: 'Description de projet de test',
                start: '2020-11-10',
                end: '2020-11-20'
            });

        expect(res.status).to
            .equal(200);

        await projectService.getAllProjects().then(
            (projects) => {
                assert(projects.find(
                    (p) => p.name === 'Projet Test'
                        && p.description === 'Description de projet de test'
                        && new Date(p.start).valueOf() === new Date('2020-11-10').valueOf()
                        && new Date(p.end).valueOf() === new Date('2020-11-20').valueOf()
                ));
            });
    });
});
