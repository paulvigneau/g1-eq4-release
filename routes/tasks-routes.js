const express = require('express');
const router = express.Router({ mergeParams: true });
const taskService = require('../services/taskService');
const { BadRequestError } = require('../errors/Error');

router.get('/', function (req, res) {
    taskService.getAllTasks(req.params.id)
        .then((tasks) => {
            res.render('tasks', {
                projectId: req.params.id,
                tasks: tasks
            });
        })
        .catch(() => {
                res.redirect('/404');
            }
        );
});

router.post('/tasks', function (req, res, next) {
    if (req.params.id && req.body.description && req.body.type && req.body.cost) {
        taskService.addTask(req.params.id, req.body.description, req.body.type, req.body.cost,
            req.body.memberId, req.body.USList, req.body.dependencies)
            .then(() =>
                res.status(200).send()
            )
            .catch((err) =>
                next(err)
            );
    }
    else {
        next(new BadRequestError('Un ou plusieurs champs sont manquants.'));
    }
});

router.put('/:tasks', function (req, res, next) {
    if (req.body.name && req.body.description && req.body.start && req.body.end) {
        taskService.updateTask(req.params.id, req.body.description, req.body.type, req.body.cost,
            req.body.memberId, req.body.USList, req.body.dependencies)
            .then(() =>
                res.status(200).send()
            )
            .catch((err) =>
                next(err)
            );
    }
    else {
        next(new BadRequestError('Un ou plusieurs champs sont manquants.'));
    }
});

module.exports = router;