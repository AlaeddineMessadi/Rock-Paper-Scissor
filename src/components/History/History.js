import React from 'react';
import { inject, observer } from 'mobx-react';

import classes from './History.css';

const history = inject('game')(
  observer(
    (props) => {
      const label1 = props.game.player1.label;
      const label2 = props.game.player2.label;
      const history = props.game.history;
      console.log(history);
      return (
        <aside className={ classes.history }>
          <table>
            <thead>
              <tr>
                <th>{ label1 }</th>
                <th className={ classes.border }></th>
                <th>{ label2 }</th>
              </tr>
            </thead>
            <tbody>
              {
                history.map((point, index) =>  { 
                  let tie , p1Status, p2Status;
                  
                  switch (point.winner) {
                    case label1: 
                      p1Status = classes.win;
                      p2Status= classes.lose;
                      break;
                    case label2: 
                      p2Status = classes.win;
                      p1Status= classes.lose;
                      break;
                    default:
                      tie = classes.tie;
                      break;
                  }
                  
                  return (
                  <tr className={tie} key={index}>
                    <td className={ p1Status }>{ point.player1 }</td>
                    <td className={ classes.border }></td>
                    <td className={ p2Status }>{ point.player2 }</td>
                  </tr>
                
                )})
              }

            </tbody>
          </table>
        </aside>
      );
    }
  ))

export default history;