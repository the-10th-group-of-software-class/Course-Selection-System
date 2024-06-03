"""Add img column to student

Revision ID: 8baa6b11fa6c
Revises: 209f490b2d36
Create Date: 2024-05-30 11:04:56.325972

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel.sql.sqltypes


# revision identifiers, used by Alembic.
revision = '8baa6b11fa6c'
down_revision = '209f490b2d36'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('student', sa.Column('data', sa.LargeBinary(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('student', 'data')
    # ### end Alembic commands ###