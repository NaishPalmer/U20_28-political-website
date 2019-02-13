writeRandomQuote = function () {
          var quotes = new Array();
          quotes[0] = "'Success is not final, failure is not fatal: it is the courage to continue that counts.' - Winston Churchill";
          quotes[1] = "'I believe that in life, you have to give things your best shot, do your best. You have to focus on what needs to be done, do the right thing, not the popular thing.' - David Cameron";
          quotes[2] = "'I don't look back at anything. I look forwards.' - Nigel Farage";
          quotes[3] = "'You may have to fight a battle more than once to win it.'- Margaret Thatcher";
          var rand = Math.floor(Math.random()*quotes.length);
          document.write(quotes[rand]);
        }
      writeRandomQuote();