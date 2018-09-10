import React from 'react';
import { inject, observer } from 'mobx-react';

import classes from './History.css';

const history = inject('game')(
  observer(
    (props) => {
      return (
        <aside className={ classes.history }>
          <table>
            <thead>
              <tr>
                <th>{ props.game.player1.label }</th>
                <th className={ classes.border }></th>
                <th>{ props.game.player2.label }</th>
              </tr>
            </thead>
            <tbody>
              {
                props.game.history.map((point, index) => (
                  <tr>
                    <td className={ point }>{ point.player1.move }</td>
                    <td>{ point.player2.move }</td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </aside>
      );
    }
  ))

export default history;