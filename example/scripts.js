"use strict";
/**
* @author Konstantin Ivanov
* @version 1.0.0
* @description JavaScript Reading time plugin
*
* @class
* ReadingTime
*/

; (function (window) {

    var wordsPerSecond,
        totalWords,
        totalReadingTimeSeconds,
        readingTimeDuration,
        readingTimeSeconds;
            

    /**
     *  Contructor
     *
     * @param {numberWordsPerMinute} to add custom speed for words per minute
     * @param {numberWordsPerMinute} to add custom speed for words per minute
     * @param {minutesLabel} to add dynamic labels for minutes
     * @param {secondsLabel} to add dynamic labels for seconds
     * @param {wordsLabel} to add dynamic labels for words
     */


    function ReadingTime(numberWordsPerMinute, readigTimeLabel, minutesLabel, wordsLabel, lessThanAMinuteLabel) {

        const wordsPerMinute = numberWordsPerMinute;
        // Select all the paragraphs in element with ID readText.
        const paragraphs = document.querySelectorAll('article.detail-wrapper p');

        // The counter.
        var count = 0;

        for (var i = 0; i < paragraphs.length; i++) {
            // Split the innerHtml of the current paragraph to count the words.
            count += paragraphs[i].innerHTML.split(' ').length;
        }

        // Add 'Reading time:' label
        document.querySelector(".reading-time__label").innerHTML = readigTimeLabel;

        //split text by spaces to define total words
        totalWords = count;

        //define words per second based on words per minute (s.wordsPerMinute)
        wordsPerSecond = wordsPerMinute / 60;

        //define total reading time in seconds
        totalReadingTimeSeconds = totalWords / wordsPerSecond;

        // define reading time
        readingTimeDuration = Math.floor(totalReadingTimeSeconds / 60);

        // define remaining reading time seconds
        readingTimeSeconds = Math.round(totalReadingTimeSeconds - (readingTimeDuration * 60));

        document.querySelector(".reading-time__word-count").innerHTML = '(' + totalWords + ' ' + wordsLabel + ')';

        if (readingTimeDuration > 0) {
            if (readingTimeSeconds > 30) {
                readingTimeDuration = readingTimeDuration + 1
                document.querySelector(".reading-time__duration").innerHTML = readingTimeDuration + ' ' + minutesLabel;
            } 
            document.querySelector(".reading-time__duration").innerHTML = readingTimeDuration + ' ' + minutesLabel;
        } else {
            document.querySelector(".reading-time__duration").innerHTML = lessThanAMinuteLabel;
        }
    }

     //-- return the window object
    window.ReadingTime = ReadingTime;

 })(window);
