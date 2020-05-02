/* eslint-disable comma-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
import { getConfig } from './apiData.jsx';

describe('getConfig', () => {
  it('returns REST configuration for POST method', () => {
    const method = 'post';
    const body = '{"title":"foo","body":"bar","userId":1}';
    expect(getConfig(method, body)).toEqual({
      method: 'post',
      body: '{"title":"foo","body":"bar","userId":1}',
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    });
  });

  it('returns REST configuration for GET method', () => {
    const method = 'get';
    const body = '';
    expect(getConfig(method, body)).toEqual({
      method: 'get'
    });
  });
});
