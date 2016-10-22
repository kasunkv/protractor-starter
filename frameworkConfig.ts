import {FrameworkConfiguration} from './typings/frameworkConfiguration';

export let frameworkConfig: FrameworkConfiguration = {    
    rootResultDirectory: 'reports',
    xmlReporter: {        
        enableReporter: true,
        resultsDirectoryName: 'results',
        resultsFileName: 'xmlTestOutput'
    },

    screenshotReporter: {
        enableReporter: true,
        destination: 'reports/screenshots',
        filename: 'htmlScreenshots.html'
    }
};