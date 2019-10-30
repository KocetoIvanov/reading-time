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
        document.querySelector(".reading-time-label").innerHTML = readigTimeLabel;

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

        document.querySelector(".wordCount").innerHTML = '(' + totalWords + ' ' + wordsLabel + ')';

        if (readingTimeDuration > 0) {
            if (readingTimeSeconds > 30) {
                readingTimeDuration = readingTimeDuration + 1
                document.querySelector("#readTime .duration").innerHTML = readingTimeDuration + ' ' + minutesLabel;
            } 
            document.querySelector("#readTime .duration").innerHTML = readingTimeDuration + ' ' + minutesLabel;
        } else {
            document.querySelector("#readTime .duration").innerHTML = lessThanAMinuteLabel;
        }
    }

     //-- return the window object
    window.ReadingTime = ReadingTime;

 })(window);


/**
* Example usage
* 
* <div id="readTime">
*   <span class="reading-time-label"></span>
*   <span class="duration"></span>
*   <span class="wordCount"></span>
*  </div>
*
* <article class="detail-wrapper">
*   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lorem et ligula elementum mollis. Ut ultricies diam vitae aliquam viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas at metus nec magna mattis tempor eu eget dolor. Integer enim lacus, condimentum vel justo sit amet, convallis iaculis ligula. Nunc volutpat fermentum erat, et facilisis ex gravida ut. Sed auctor pulvinar eros nec tincidunt. Suspendisse vel ornare dolor. Sed porta nisl at posuere vulputate.</p>
*   <p>Sed dictum, eros a finibus bibendum, dolor est dignissim diam, non pretium massa ante sit amet leo. Nulla malesuada pharetra malesuada. Suspendisse rutrum purus eleifend, placerat risus id, pulvinar lacus. In imperdiet magna ut urna mattis, vel lacinia odio elementum. Praesent velit tellus, molestie ut placerat et, convallis vitae erat. Vivamus sit amet bibendum nisl. Proin luctus mattis egestas. In nisl enim, semper eu velit sed, congue pellentesque diam. Nulla laoreet efficitur ligula vitae lobortis.</p>
* </article>
*
* to call / init
*   <script type="text/javascript">
*      document.addEventListener('DOMContentLoaded', (event) => {
*           new ReadingTime(270, 'Reading time:', 'min', 'words', 'Less than a minute');
*      })
*   </script>
*
*/
