process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const assert = require('assert');
const chai = require('chai');
const { describe, it } = require('mocha');
const chaiHttp = require('chai-http');
const dirtyChai = require('dirty-chai');
let projectService = require('../../services/project');
const {Builder, By, until, Key} = require('selenium-webdriver');

const expect = chai.expect;
chai.use(chaiHttp);
chai.use(dirtyChai);

let driver = new Builder()
    .forBrowser('chrome')
    .build();

//TODO
/*
describe('displayProject', () => {
    it('This should add a project, and check if it\'s page contains all it\'s information', async () => {
        await testProjects.saveProject('Projet 1', 'Ceci est un magnifique projet', '12-11-2020', '20-11-2020');
        await projectService.getAllProjects()
            .then(async projects => {

            });
        /*await driver.get('http://localhost:3000/projects/');

        await driver.findElements(By.className('card'))
            .then(async projects => {
                expect(projects.length).to.be.equal(2);
            });

        await driver.findElement(By.className('card-title')).getText()
            .then(async text => {
                expect(text).to.be.equal('Projet: Projet Test');
            });*/
/*
    });
});
*/


after(function(done) {
    mongoose.model('project').deleteMany({}, () => {
        mongoose.connection.close(done);
    });
});