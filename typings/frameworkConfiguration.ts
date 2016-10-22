export interface FrameworkConfiguration {
    /**
     * Root directory where all the reports are generated and screen captures are saved.
     * example:
     *          rootResultDirectory: 'reports'
     */    
    rootResultDirectory?: string;

    /**
     * Configuration options for the integrated reporting plugin. Enabled and configure the plugin to 
     * get XML result file at a location specified by configuration values.
     * example:
     *          xmlReporter: {
     *              enableReporter: true,
     *              resultsDirectoryName: 'test-results',
     *              resultsFileName: 'xmlReport'
     *          }
     */
    xmlReporter?: {
        /**
         * Enables or disables the test result reporting feature. Reporting creates a XML file
         * containing the tests that was run and the associated results of thoese tests.
         * example:
         *      enableReporter: true
         */
        enableReporter?: boolean;

        /**
         * Name of the directory in which the XML results file is created if reporter is enabled
         * example:
         *      resultsDirectoryName: 'results'
         */
        resultsDirectoryName?: string;

        /**
         * Name of the file that contains the results of the tests runs. This file is created inside the 
         * directory specified by the resultsDirectoryName.
         * example:
         *      resultsFileName: 'xmlOutput'
         */
        resultsFileName?: string
    };

    /**
     * Configuration optios for the integrated screenshot reporting plugin. Enabled and configure plugin to 
     * get screenshots captured for each test, failed tests and a associated meta data JSON file to process later.
     * example:
     *          screenshotReporter: {
     *              enableReporter: true
     *              baseDirectory: reports,
     *              takeScreenShotsForSkippedSpecs: true,
     *              takeScreenShotsOnlyForFailedSpecs: true
     *          }
     */
    screenshotReporter?: {
        /**
         * Enables or disables the test result reporting feature. Reporting creates a XML file
         * containing the tests that was run and the associated results of thoese tests.
         * example:
         *      enableReporter: true
         */
        enableReporter?: boolean;

        /**
         * Set the directory where images files are stored.
         * example:
         *      destination: 'path/to/directory
         */
        destination?: string;

         /**
         * Enable or disable the deletion of all the screenshots of the previours test when runing a new test.
         * example:
         *      cleanDestination: false
         */
        cleanDestination?: boolean;

        /**
         * Enable or disable showing of test result summary.
         * example:
         *      showSummary: true
         */
        showSummary?: boolean;

        /**
         * Enable or disable showing of test configuration
         * example:
         *      showConfiguration: true
         */        
        showConfiguration?: boolean;

        /**
         * Set the name of the html report.
         * example:
         *      reportTitle: 'My Test Report'
         */
        reportTitle?: string;

        /**
         * Filename of the report to be created.
         * example:
         *      filename: false
         */
        filename?: string;

        /**
         * Use external stylesheet to style the html teport.
         * example:
         *      consolidateAll: false
         */
        userCss?: string; 

        /**
         * Ignore specs that are skipped from the final report.
         * example:
         *      ignoreSkippedSpecs: false
         */
        ignoreSkippedSpecs?: boolean; 

        /**
         * Capture only failed test suites in the report.
         * example:
         *      captureOnlyFailedSpecs: false
         */
        captureOnlyFailedSpecs?: boolean;      
    }; 
}