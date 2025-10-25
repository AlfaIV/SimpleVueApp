// tests/setupTests.ts
import { configure } from '@testing-library/vue';

configure({
    testIdAttribute: 'data-testid',
});