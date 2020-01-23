import * as sdk from 'botpress/sdk'
import { Migration } from 'core/services/migration'

const migration: Migration = {
  info: {
    description: 'Table to store metrics for analytics',
    target: 'core',
    type: 'database'
  },
  up: async ({ bp }: sdk.ModuleMigrationOpts): Promise<sdk.MigrationResult> => {
    try {
      await bp.database.createTableIfNotExists('srv_analytics', table => {
        table.string('botId')
        table.string('metric_name')
        table.string('channel')
        table.timestamp('created_on')
        table.timestamp('updated_on')
        table.decimal('value')
        table.primary(['botId', 'metric_name', 'channel'], 'pk_analytics_bot_metric_channel')
      })
      return { success: true, message: 'Configuration updated successfully' }
    } catch (err) {
      return { success: false, message: err.message }
    }
  }
}

export default migration
