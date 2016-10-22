import {Promise} from 'es6-promise';
import {Config} from 'protractor';
import {frameworkConfig} from './frameworkConfig';

// Configure Screenshots reporter        
let HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
let screenShotReporter = new HtmlScreenshotReporter({
    dest: frameworkConfig.screenshotReporter.destination,
    filename: frameworkConfig.screenshotReporter.filename
});

export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['sample.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true,       

    beforeLaunch: () => {
        // return new Promise((resolve) => {
        //     screenShotReporter.beforeLaunch(resolve);
        // });
    },

    onPrepare: () => {
        // Configure JasmineReporter for outputting XML results.        
        let JasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
            consolidateAll: frameworkConfig.xmlReporter.enableReporter || false, 
            savePath: `${frameworkConfig.rootResultDirectory || 'reports'}/${frameworkConfig.xmlReporter.resultsDirectoryName || 'xmlReports'}`,
            filePrefix:  frameworkConfig.xmlReporter.resultsFileName
        }));

        // Configure Screenshots reporter 
        jasmine.getEnv().addReporter(screenShotReporter);      

    },

    afterLaunch: (exitCode) => {
        // return new Promise((resolve) => {
        //     screenShotReporter.afterLaunch(resolve.bind(this, exitCode));
        // });
    }
};