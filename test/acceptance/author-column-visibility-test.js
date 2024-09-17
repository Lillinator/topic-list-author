import { visit } from '@ember/test-helpers'
import { test } from 'qunit'
import { acceptance } from 'discourse/tests/helpers/qunit-helpers'

acceptance('Discourse Topic List Author', function (needs) {
  test('Author column is present on the left', async function (assert) {
    settings.show_topic_author_column_first = true
    settings.show_topic_author_column_last = false

    await visit('/')

    assert.dom('.custom-author-column').exists()
  })

  test('Author column is present on the right', async function (assert) {
    settings.show_topic_author_column_first = false
    settings.show_topic_author_column_last = true

    await visit('/')

    assert.dom('.custom-author-column').exists()
  })

  test('Author column is present on the left on mobile', async function (assert) {
    needs.mobileView()
    settings.show_topic_author_column_first = true
    settings.show_topic_author_column_last = false

    await visit('/')

    assert.dom('.custom-author-column').exists()
  })

  test('Author column is present on the right on mobile', async function (assert) {
    needs.mobileView()
    settings.show_topic_author_column_first = true
    settings.show_topic_author_column_last = false

    await visit('/')

    assert.dom('.custom-author-column').exists()
  })
})
