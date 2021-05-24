import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './componentes/counter';
import { CounterWithCustomHook } from './componentes/CounterWithCustomHook';
import { MultiplesCustomHook } from './componentes/examples/MultiplesCustomHook';
import { FormWithCustomHook } from './componentes/useEffect/FormWithCustomHook';
import { SimpleForm } from './componentes/useEffect/SimpleForm';
import { Layout } from './componentes/useLayoutEffect/layout';
import { FocusScreen } from './componentes/useRef/FocusScreen';
import { RealExampleRef } from './componentes/useRef/RealExampleRef';
import { HookApp } from './HookApp';


ReactDOM.render(

    //<HookApp />,
    //<Counter />,
    //<CounterWithCustomHook />,
  
   <Layout />,
  document.getElementById('root')
);

